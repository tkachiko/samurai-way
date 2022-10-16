import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
  ActionsTypes,
  DialogsDataType,
  MessagesDataType,
} from '../../Redux/state';
import {sendMessageAC, updateNewMessageBodyAC} from '../../Redux/dialogs-reducer';

type DialogsType = {
  dialogs: DialogsDataType[]
  messages: MessagesDataType[]
  dispatch: (action: ActionsTypes) => void
  newMessageBody: string
}

export const Dialogs: React.FC<DialogsType> = (props) => {
  const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
  const messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);

  const sendMessage = () => {
    props.dispatch(sendMessageAC(props.newMessageBody));
  };

  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewMessageBodyAC(e.currentTarget.value));
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <textarea onChange={onNewMessageChange}
                value={props.newMessageBody}
                style={{width: '300px'}}>
        {props.newMessageBody}
      </textarea>
      <button style={{width: '50px', height: '30px', alignSelf: 'end'}}
              onClick={sendMessage}
      >Send
      </button>
    </div>
  );
};

export default Dialogs;