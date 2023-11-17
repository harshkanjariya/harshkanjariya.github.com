import React from 'react';
import styles from './AppsDialog.module.scss';
import BasicDialog, {BasicDialogProps} from '../BasicDialog';
import BaseFolder from '../../Folder/BaseFolder';
import data from '../../../assets/data/apps.json';

const apps: any = data;

function AppsDialog(props: BasicDialogProps) {
  return <BasicDialog
    isOpen={props.isOpen}
    onClose={props.onClose}
    title={'Apps'}
  >
    <div className={styles.appDialog}>
      {Object.keys(apps).map((o, i) =>
        <BaseFolder
          key={i}
          rounded={true}
          useBackground={true}
          name={apps[o].name}
          image={apps[o].icon}
          onOpen={() => window.open(apps[o].links.home)}
        />
      )}
    </div>
  </BasicDialog>;
}

export default AppsDialog;