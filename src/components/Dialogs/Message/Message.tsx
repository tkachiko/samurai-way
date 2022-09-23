import React from 'react';
import s from './Message.module.css';

type MessagePropsType = {
  message: string
  id?: number
}

const Message = (props: MessagePropsType) => {
  return (
    <div className={s.dialog}>
      {props.message}
    </div>
  );
};

export default Message;