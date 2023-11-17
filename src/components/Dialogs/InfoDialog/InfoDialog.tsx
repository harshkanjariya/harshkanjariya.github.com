import React from 'react';
import styles from './InfoDialog.module.scss';
import data from '../../../assets/data/info.json';
import BasicDialog, {BasicDialogProps} from '../BasicDialog';

const info: any = data;

function InfoDialog(props: BasicDialogProps) {
  const Rows = Object.keys((info)).map((key, index) =>
    <tr key={index}>
      <td className={styles.td}>{key}</td>
      <td className={styles.td}>{info[key]}</td>
    </tr>
  );

  return <BasicDialog
    isOpen={props.isOpen}
    onClose={props.onClose}
    title={'System Properties'}
  >
    <div className={styles.header}>
      <img src="https://i.stack.imgur.com/pYMmW.png?s=256&g=1" alt="profile"/>
      <div className={styles.name}>Harsh Kanjariya</div>
    </div>
    <table>
      <tbody>
      {Rows}
      </tbody>
    </table>
  </BasicDialog>;
}

export default InfoDialog;