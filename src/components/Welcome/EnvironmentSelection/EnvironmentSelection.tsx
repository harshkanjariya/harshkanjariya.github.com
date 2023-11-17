import React from 'react';
import styles from './EnvironmentSelection.module.scss';
import {environments} from '../../../utils/constants';
import basePath from '../../../utils/basePath';

export interface EnvironmentSelectionProps {
  className?: string,
  onSelect: (selectedEnv: string) => void,
}

function EnvironmentSelection(props: EnvironmentSelectionProps) {
  return <div className={'page-body ' + styles.envSelect}>
    <span style={{marginTop: '-100px'}}>Please select the environment :</span>
    <div style={{height: 30}}/>
    <div className={styles.envList}>
      <div className={styles.env} onClick={() => props.onSelect(environments.windows)}>
        <img src={basePath + '/icons/windows.png'} alt="gui"/>
        <span>Windows</span>
      </div>
      <div className={styles.env} onClick={() => props.onSelect(environments.terminal)}>
        <img src={basePath + '/icons/terminal.png'} alt="cli"/>
        <span>Terminal</span>
      </div>
    </div>
  </div>;
}

export default EnvironmentSelection;