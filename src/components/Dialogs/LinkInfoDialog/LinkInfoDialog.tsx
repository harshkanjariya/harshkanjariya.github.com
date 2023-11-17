import BasicDialog, {BasicDialogProps} from '../BasicDialog';
import BaseFolder from '../../Folder/BaseFolder';
import React from 'react';
import styles from './LinkInfoDialog.module.scss';

interface LinkInfoDialog extends BasicDialogProps {
  data: {
    description?: string;
    links?: any;
    icons?: any;
    name?: string;
  }
}

function LinkInfoDialog(props: LinkInfoDialog) {
  return <BasicDialog isOpen={props.isOpen} onClose={props.onClose} title={props.data.name}>
    <span>{props.data.description}</span>
    <div className={styles.linkList}>
      {Object.keys(props.data.links || {}).map((key) =>
        <BaseFolder
          rounded={true}
          key={key}
          name={key}
          image={props.data.icons[key]}
          onOpen={() => window.open(props.data.links[key])}
        />
      )}
    </div>
  </BasicDialog>;
}

export default LinkInfoDialog;