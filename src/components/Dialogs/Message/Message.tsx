import React from 'react';
import styles from './Message.module.css';

type MessagePropsType = {
  message: string
  id: string
}

const Message: React.FC<MessagePropsType> = (props) => {
  return (
    <div className={styles.dialog}>{props.message}</div>
  );
};

export default Message;