import React from 'react';
import basePath from '../../utils/basePath';

export interface BaseFolderProps {
  name: string,
  image: string,
  onOpen?: () => void,
  rounded?: boolean,
  useBackground?: boolean,
  onContextMenu?: (event: React.MouseEvent<HTMLDivElement>) => void,
}

function BaseFolder(props: BaseFolderProps) {
  const classList = ['folder'];
  if (props.rounded) {
    classList.push('rounded');
  }
  if (props.useBackground) {
    classList.push('with-background');
  }
  return <div
    className={classList.join(' ')}
    onClick={props.onOpen}
    onContextMenu={props.onContextMenu}
  >
    <img src={basePath + props.image} alt="folder"/>
    <span className="folder-name">{props.name}</span>
  </div>;
}

export default BaseFolder;