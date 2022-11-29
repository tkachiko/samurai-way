import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from 'react-router-dom';

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
  const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);

  const sendMessage = () => {
    props.sendMessage(props.dialogsPage.newMessageBody);
  };

  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return props.updateNewMessageBody(e.currentTarget.value);
  };

  if (!props.isAuth) return <Redirect to={'/login'}/>;

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <textarea onChange={onNewMessageChange}
                value={props.dialogsPage.newMessageBody}
                style={{width: '300px'}}>
        {props.dialogsPage.newMessageBody}
      </textarea>
      <button style={{width: '50px', height: '30px', alignSelf: 'end'}}
              onClick={sendMessage}
      >Send
      </button>
    </div>
  );
};

export default Dialogs;