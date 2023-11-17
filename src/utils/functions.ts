import {FolderStructure, Path} from './types';

export const getCurrentFolder = (fs: FolderStructure, path: Path[]) => {
  let currentFolder: FolderStructure = fs;
  for (let i = 0; i < path.length; i++) {
    const children = currentFolder.children;
    if (children) {
      currentFolder = children[path[i].value];
    }
  }
  return currentFolder;
};

