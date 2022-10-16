import {v1} from 'uuid';
import {ActionsTypes, DialogsPageType, MessagesDataType} from './state';

export const SEND_MESSAGE = 'SEND-MESSAGE';
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage: MessagesDataType = {
        id: v1(),
        message: state.newMessageBody,
      };
      state.newMessageBody = '';
      state.messages.push(newMessage);
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.text;
      return state;
    default:
      return state;
  }
};

export const sendMessageAC = (text: string) => ({
    type: SEND_MESSAGE,
    text
  } as const
);
export const updateNewMessageBodyAC = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    text: text
  } as const
);