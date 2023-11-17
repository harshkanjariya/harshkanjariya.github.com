import React from 'react';
import styles from './Input.module.scss';
import {FormEvent} from 'react';

export interface InputProps {
  value?: string;
  hint: string;
  type?: string;
  onChange?: (value: string) => void,
  className?: string,
}

function Input(props: InputProps) {
  const args = {
    className: styles.input + ' ' + props.className,
    type: props.type,
    placeholder: props.hint,
    value: props.value,
    onChange: (e: FormEvent<HTMLInputElement>) => {
      if (props.onChange)
        props.onChange(e.currentTarget.value);
    },
  };
  return <input {...args}/>;
}

Input.defaultProps = {
  type: 'text',
  onChange: undefined,
};

export default Input;