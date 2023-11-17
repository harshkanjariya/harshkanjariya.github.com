import React from 'react';
import BaseFolder from './BaseFolder';

export interface FolderProps {
  isDir?: boolean,
  name: string,
  onOpen?: () => void,
}

function Folder(props: FolderProps) {
  if (props.isDir) {
    return <BaseFolder name={props.name} image={'/icons/folder.png'} onOpen={props.onOpen}/>;
  } else {
    return <BaseFolder name={props.name} image={'/icons/file.png'} onOpen={props.onOpen}/>;
  }
}

Folder.defaultProps = {
  isDir: true,
};

export default Folder;