import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsDataType, MessagesDataType} from '../../Redux/state';

type DialogsType = {
  dialogs: DialogsDataType[]
  messages: MessagesDataType[]
}

export const Dialogs: React.FC<DialogsType> = (props) => {
  const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
  const messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;