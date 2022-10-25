import React from 'react';
import {ActionsTypes, DialogsDataType, MessagesDataType,} from '../../redux/store';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

type DialogsType = {
  dialogs: DialogsDataType[]
  messages: MessagesDataType[]
  dispatch: (action: ActionsTypes) => void
  newMessageBody: string
}

export const DialogsContainer: React.FC<DialogsType> = (props) => {
  const sendMessage = () => {
    props.dispatch(sendMessageAC(props.newMessageBody));
  };

  const onNewMessageChange = (text: string) => {
    props.dispatch(updateNewMessageBodyAC(text));
  };

  return (
    <Dialogs sendMessage={sendMessage}
             updateNewMessageBody={onNewMessageChange}
             newMessageBody={props.newMessageBody}
             dialogs={props.dialogs}
             messages={props.messages}
    />
  );
};

export default DialogsContainer;