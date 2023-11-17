import {useEffect, useState} from 'react';
import {FolderStructure, Path} from './types';
import {useNavigate} from 'react-router-dom';
import {routes} from '../core/router';
import genericFs from '../assets/data/fs.json';
import terminalFs from '../assets/data/terminal.json';
import appsFs from '../assets/data/apps.json';
import {getCurrentFolder} from './functions';
import _ from 'lodash';

const fs: FolderStructure = {
  isDir: true,
  children: {
    home: {
      isDir: true,
      name: 'Home',
      children: _.cloneDeep(genericFs),
    },
    apps: {
      isDir: true,
      name: 'Applications',
      children: _.cloneDeep(appsFs),
    },
    ...terminalFs,
  }
};

function setupFsRecursive(obj: any, parent: any) {
  if (obj.isDir) {
    if (!obj.children) obj.children = {};
    obj.children['.'] = {...obj};
    if (parent) {
      obj.children['..'] = {...parent};
    }
    for (const child of Object.keys(obj.children)) {
      if (child != '.' && child != '..') {
        setupFsRecursive(obj.children[child], obj);
      }
    }
  }
}

const commandManuel: any = {
  help: {
    description: 'To print command help menu'
  },
  ls: {
    description: 'Used to list files in current folder',
  },
  cd: {
    description: 'Used to move through file system',
  },
  clear: {
    description: 'Clear output screen'
  },
  open: {
    description: 'Open file or execute special files',
  }
};

const tab = '&nbsp;&nbsp;&nbsp;&nbsp;';

export function useCli() {
  const [currentPath, setCurrentPath] = useState([] as Path[]);
  const [stdout, setStdout] = useState([] as string[]);
  const navigate = useNavigate();
  const [links, setLinks] = useState([] as any);
  const [selection, setSelection] = useState(0);
  const [historySelection, setHistorySelection] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  useEffect(() => {
    setupFsRecursive(fs, undefined);
  }, []);

  function helpMenu() {
    let s = '<table>';
    for (const c of Object.keys(commandManuel)) {
      s += '<tr>';
      s += `<td>${tab + c}</td>`;
      s += `<td>${tab + commandManuel[c].description}</td>`;
      s += '</tr>';
    }
    s += '</table>';
    return s;
  }

  function getFolderList() {
    const currentFolder = getCurrentFolder(fs, currentPath);
    let list = '';
    if (currentFolder.children)
      for (const o of Object.keys(currentFolder.children)) {
        if (o == '.' || o == '..') continue;
        const className = currentFolder.children[o].isDir ? 'folder-color' : '';
        list += `<span class="${className}">${o}</span><br/>`;
      }
    return list;
  }

  function openSelectedLink() {
    if (links.length && selection >=0 && selection <= links.length - 1) {
      window.open(links[selection].value);
      setSelection(0);
      setLinks([]);
    }
  }

  function handleFileOpen(name: string) {
    const current = getCurrentFolder(fs, currentPath);
    if (!current.children || !current.children[name] || current.children[name].isDir) {
      throw 'Invalid file: ' + name;
    } else {
      const file = current.children[name];
      if (file.isLink) {
        const links = file.links || {};
        const keys = Object.keys(links);
        if (keys.length == 1) {
          window.open(links[keys[0]]);
        } else {
          setLinks(keys.map((k) => ({
            name: k,
            value: links[k],
          })));
        }
      }
    }
  }

  function resolvePath(path: string) {
    path = path.trim();
    const parts = path.split('/').filter(Boolean);

    const isAbsolute = path.startsWith('/');
    let cur = isAbsolute ? fs : getCurrentFolder(fs, currentPath);

    const newPath = isAbsolute ? [] : [...currentPath];

    for (const p of parts) {
      if (cur.children && cur.children[p] && cur.children[p].isDir) {
        cur = cur.children[p];
        newPath.push({
          value: p,
          label: p,
        });
      } else {
        throw new Error('Invalid folder: ' + path);
      }
    }
    let i = 0;
    while (i < newPath.length - 1) {
      if (newPath[i + 1].value == '..') {
        newPath.splice(i, 2);
        if (i > 0) i--;
      } else if (newPath[i].value == '.') {
        newPath.splice(i, 1);
      } else {
        i++;
      }
    }
    return newPath;
  }

  function runCommand(fullCommand: string) {
    if (!fullCommand.trim().length) return 200;
    const [command, ...args] = fullCommand.trim().split(/\s+/g);
    if (!commandManuel[command]) {
      return `Invalid command: ${command} <br/><br/>
            Here are some basic commands: <br/>
            ${helpMenu()} <br />`;
    } else {
      switch (command) {
        case 'ls':
          return getFolderList();
        case 'help':
          return `
            Basic commands supported to this terminal :<br />
            <br />${helpMenu()} <br />
          `;
        case 'cd':
          try {
            setCurrentPath(resolvePath(args[0]));
            return 200;
          } catch (e: any) {
            return e.message;
          }
        case 'open':
          if (args[0] == 'windows') {
            navigate(routes.windows);
          } else {
            try {
              handleFileOpen(args[0]);
            } catch (e: any) {
              return e.message;
            }
          }
          return 200;
        case 'clear':
          setStdout([]);
      }
    }
  }

  function getCurrentPrompt() {
    let s;
    if (!currentPath.length) {
      s = '/ >';
    } else {
      s = currentPath.map((v) => `/ ${v.label} `).join('') + ' >';
    }
    return `<span class="primary-color">${s}</span>`;
  }

  function getCommandSuggestions(text: string) {
    if (!text.trim().length) return {
      suggestions: [],
      startIndex: -1,
    };
    const [command, ...args] = text.trim().split(/\s+/g);

    const suggestions = [];
    let startIndex = 0;
    if (!args.length) {
      startIndex = command.length;
      for (const c of Object.keys(commandManuel)) {
        if (c.startsWith(command)) {
          suggestions.push(c);
        }
      }
    } else {
      if (commandManuel[command]) {
        const query = args[0];
        startIndex = query.length;
        const currentFolder = getCurrentFolder(fs, currentPath);
        if (command == 'cd' || command == 'ls') {
          if (currentFolder.children)
            for (const c of Object.keys(currentFolder.children)) {
              if (currentFolder.children[c].isDir && c.startsWith(query)) {
                suggestions.push(c);
              }
            }
        } else if (command == 'open') {
          const currentFolder = getCurrentFolder(fs, currentPath);
          if (currentFolder.children)
            for (const c of Object.keys(currentFolder.children)) {
              if (!currentFolder.children[c].isDir && c.startsWith(query)) {
                suggestions.push(c);
              }
            }
        }
      }
    }
    return {startIndex, suggestions};
  }

  function execute(command: string) {
    setCommandHistory([command, ...commandHistory]);
    const newOut = [
      getCurrentPrompt() + ' ' + command,
      ...stdout,
    ];
    const result = runCommand(command);
    if (result) {
      if (typeof result === 'string') {
        newOut.unshift(result);
      }
      setStdout(newOut);
    }
  }

  return {
    currentPath,
    stdout,
    setStdout,
    links, openSelectedLink,
    selection, setSelection,
    commandHistory, setCommandHistory,
    historySelection, setHistorySelection,
    execute,
    getCurrentPrompt,
    getCommandSuggestions,
  };
}
