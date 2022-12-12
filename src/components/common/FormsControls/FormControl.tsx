import React, {PropsWithChildren} from 'react';
import styles from './FormControls.module.css';

type FormControlType = {
  children?: React.ReactNode
  input: any
  meta: any
}

export const FormControl: React.FC<PropsWithChildren<FormControlType>> = ({input, meta, children, ...props}) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
      <div>{children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};