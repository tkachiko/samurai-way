import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={'Emmett'} id={1}/>
        <DialogItem name={'Marty'} id={2}/>
        <DialogItem name={'Jennifer'} id={3}/>
        <DialogItem name={'Lorraine'} id={4}/>
        <DialogItem name={'George'} id={5}/>
      </div>
      <div className={s.messages}>
        <Message message={'Hey!'}/>
        <Message message={'How are you?'}/>
        <Message message={'Let\'s go!'}/>
      </div>
    </div>
  );
};

export default Dialogs;