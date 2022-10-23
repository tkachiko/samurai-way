import {v1} from 'uuid';
import {ActionsTypes, DialogsDataType, MessagesDataType} from '../types/types';
export const SEND_MESSAGE = 'SEND-MESSAGE';
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

type InitialStateType = typeof initialState;

const initialState = {
  dialogs: [
    {id: v1(), name: 'Emmett'},
    {id: v1(), name: 'Marty'},
    {id: v1(), name: 'Jennifer'},
    {id: v1(), name: 'Lorraine'},
    {id: v1(), name: 'George'},
  ] as Array<DialogsDataType>,
  messages: [
    {id: v1(), message: 'Hey!'},
    {id: v1(), message: 'How are you?'},
    {id: v1(), message: 'Let\'s go!'},
  ] as Array<MessagesDataType>,
  newMessageBody: '' as string,
}

export const dialogsReducer = (state= initialState, action: ActionsTypes): InitialStateType => {
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