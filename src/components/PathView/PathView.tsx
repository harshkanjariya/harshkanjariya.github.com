import React from 'react';
import styles from './PathView.module.scss';
import {Path} from '../../utils/types';

export interface PathViewProps {
  className?: string,
  path: Path[],
  onPathClick: (index: number) => void,
}

function PathView(props: PathViewProps) {
  const Elements = [];
  for (let i = 0; i < props.path.length; i++) {
    if (i > 0) {
      Elements.push(<span style={{padding: 5}}>/</span>);
    }
    Elements.push(
      <span className={styles.clickablePath} onClick={() => props.onPathClick(i)}>
        {props.path[i].label}
      </span>
    );
  }

  return <div className={props.className + ' ' + styles.pathView}>
    <span
      className={styles.clickablePath}
      onClick={() => props.onPathClick(-1)}>/</span>
    {Elements}
  </div>;
}

export default PathView;