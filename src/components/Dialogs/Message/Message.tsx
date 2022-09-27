import React from 'react';
import styles from './Message.module.css';

type MessagePropsType = {
  message: string
  id?: number
}

const Message = (props: MessagePropsType) => {
  return (
    <div className={styles.dialog}>{props.message}</div>
  );
};

export default Message;