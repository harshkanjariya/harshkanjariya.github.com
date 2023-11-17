import React from 'react';
import styles from './ContextMenu.module.scss';
import {forwardRef, useImperativeHandle, useState} from 'react';
import {Position} from '../../utils/types';

export interface ContextMenuProps {
  options: string[],
  onSelect: (index: number) => void,
}

export interface ContextMenuHandlers {
  show: (position: Position) => void,
}

const ContextMenu = forwardRef(function ContextMenu(props: ContextMenuProps, ref) {
  const [showing, setShowing] = useState(false);
  const [position, setPosition] = useState({x: -1000, y: -1000});

  function show(position: Position) {
    setPosition(position);
    setShowing(true);
  }

  function hide() {
    setTimeout(() => {
      setPosition({x: -1000, y: -1000});
    }, 300);
    setShowing(false);
  }

  useImperativeHandle(ref, () => {
    return {show};
  }, []);

  const Options = props.options.map((o, index) =>
    <span
      key={index}
      className={styles.option}
      onClick={() => props.onSelect(index)}
    >
      {o}
    </span>
  );
  const classList = ['card', styles.contextMenu];
  if (showing) classList.push(styles.active);
  return <div
    onMouseLeave={hide}
    style={{top: position.y, left: position.x}}
    className={classList.join(' ')}>
    {Options}
  </div>;
});

export default ContextMenu;