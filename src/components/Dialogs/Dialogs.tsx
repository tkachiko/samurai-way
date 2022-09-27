import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

type DialogsDataType = {
  id: number
  name: string
}
type MessagesDataType = {
  id: number
  message: string
}

export const Dialogs = () => {
  const dialogs: DialogsDataType[] = [
    {id: 1, name: 'Emmett'},
    {id: 2, name: 'Marty'},
    {id: 3, name: 'Jennifer'},
    {id: 4, name: 'Lorraine'},
    {id: 5, name: 'George'},
  ];
  const messages: MessagesDataType[] = [
    {id: 1, message: 'Hey!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Let\'s go!'},
  ];

  const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
  const messagesElements = messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;