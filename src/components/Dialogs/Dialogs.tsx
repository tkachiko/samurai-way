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

  let newMessageElement = React.createRef<HTMLTextAreaElement>();

  const sendMessage = () => {
    let text = newMessageElement.current?.value;
    alert(text);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <textarea style={{width: '300px'}}
                ref={newMessageElement}>
      </textarea>
      <button style={{width: '50px', height: '30px', alignSelf: 'end'}}
              onClick={sendMessage}
      >Send
      </button>
    </div>
  );
};

export default Dialogs;