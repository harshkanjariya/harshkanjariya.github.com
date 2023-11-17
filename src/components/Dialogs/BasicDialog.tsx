import React from 'react';
import {Dialog, DialogContent, DialogTitle} from '@mui/material';
import {Close} from '@mui/icons-material';

export interface BasicDialogProps {
  isOpen: boolean,
  onClose: () => void,
  children?: any,
  title?: string,
}

function BasicDialog(props: BasicDialogProps) {
  return <Dialog open={props.isOpen} onClose={props.onClose}>
    <DialogTitle>
      <div className="dialog-header">
        <span className="title">{props.title}</span>
        <Close onClick={props.onClose}/>
      </div>
    </DialogTitle>
    <DialogContent>
      {props.children}
    </DialogContent>
  </Dialog>;
}

export default BasicDialog;