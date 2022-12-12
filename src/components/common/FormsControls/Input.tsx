import React from 'react';
import styles from './FormControls.module.css';

type TextAreaType = {
  input: any
  meta: any
}

export const Input: React.FC<TextAreaType> = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
      <input {...input} {...props}></input>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};