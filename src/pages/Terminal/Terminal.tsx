import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import styles from './Terminal.module.scss';
import Typewriter from 'typing-animation-react';
import {TypewriterHandlers} from 'typing-animation-react/stories/Typewriter/Typewriter';
import {useCli} from '../../utils/cli';
import {addKeyCallback, removeKeyCallback} from '../../utils/keyboardEvents';

const message = 'Welcome to cli interface of portfolio!';

function Terminal() {
  const {
    stdout,
    setStdout,
    links, openSelectedLink,
    selection, setSelection,
    commandHistory,
    historySelection, setHistorySelection,
    getCurrentPrompt,
    execute,
    getCommandSuggestions,
  } = useCli();
  const writer = useRef<TypewriterHandlers>({} as TypewriterHandlers);
  const [isAnimEnded, setIsAnimEnded] = useState(false);
  const stdin = useRef<HTMLInputElement>({} as any);
  const [currentCommandValue, setCurrentCommandValue] = useState('');

  useLayoutEffect(() => {
    if (writer.current)
      writer.current.write(message);
  }, []);

  useLayoutEffect(() => {
    if (isAnimEnded && stdin.current) {
      stdin.current.focus();
    }
  }, [isAnimEnded]);

  useLayoutEffect(() => {
    if (historySelection >= 0 && commandHistory.length) {
      stdin.current.value = commandHistory[historySelection];
    }
  }, [historySelection, commandHistory]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key == 'ArrowDown') {
      setSelection((selection) =>
        Math.min(links.length - 1, selection + 1));
    } else if (e.key == 'ArrowUp') {
      setSelection((selection) =>
        Math.max(0, selection - 1));
    } else if (e.key == 'Enter' && links.length) {
      openSelectedLink();
    }
  }, [openSelectedLink, links.length, setSelection]);

  useEffect(() => {
    addKeyCallback(onKeyDown);
    return () => {
      removeKeyCallback(onKeyDown);
    };
  }, [onKeyDown]);

  const Stdin = <input
    ref={stdin}
    className={styles.stdin}
    type="text"
    onKeyDown={(e) => {
      if (e.key == 'Enter') {
        e.stopPropagation();
        execute(e.currentTarget.value);
        e.currentTarget.value = '';
      }
      if (e.key == 'Tab') {
        e.preventDefault();
        const {startIndex, suggestions} = getCommandSuggestions(e.currentTarget.value);
        if (suggestions.length == 1) {
          e.currentTarget.value += suggestions[0].substring(startIndex);
        }
      }
      if (e.key == 'ArrowUp') {
        e.stopPropagation();
        e.preventDefault();
        if (commandHistory.length) {
          if (historySelection == -1) {
            setCurrentCommandValue(e.currentTarget.value);
          }
          setHistorySelection(Math.min(
            historySelection + 1,
            commandHistory.length - 1
          ));
        }
      } else if (e.key == 'ArrowDown') {
        e.stopPropagation();
        e.preventDefault();
        if (commandHistory.length) {
          if (historySelection == 0) {
            e.currentTarget.value = currentCommandValue;
          }
          setHistorySelection(Math.max(-1, historySelection - 1));
        }
      } else {
        setHistorySelection(-1);
      }
    }}
    aria-multiline={false}
  />;
  let PathToShow: any = <div>
    <span dangerouslySetInnerHTML={{__html: getCurrentPrompt()}}/>
    &nbsp;{Stdin}
  </div>;

  let FirstMessage;
  if (!isAnimEnded) {
    PathToShow = null;
    FirstMessage = <Typewriter
      style={{display: 'inline-block'}}
      delay={50}
      ref={writer}
      onAnimationEnd={() => setTimeout(() => {
        setIsAnimEnded(true);
        setStdout([message]);
      }, 500)}/>;
  } else {
    FirstMessage = null;
  }

  let Links;
  if (links.length) {
    Links = <table className={styles.linkContainer}>
      <tbody>
      {links.map((link: any, i: number) =>
        <tr key={i}>
          <td><input type="radio" readOnly={true} checked={i == selection}/></td>
          <td>{link.name}</td>
          <td>{link.value}</td>
        </tr>
      )}
      </tbody>
    </table>;
  }

  return <div
    className={'page-body ' + styles.terminal}
    onClick={() => stdin.current && stdin.current.focus && stdin.current?.focus()}
  >
    {FirstMessage}
    <div className={styles.terminalBody}>
      {Links || <span className={styles.promptRow}>
        {PathToShow}
      </span>}
      {stdout.map((o, i) => <div key={i} dangerouslySetInnerHTML={{__html: o}}/>)}
    </div>
  </div>;
}

export default Terminal;