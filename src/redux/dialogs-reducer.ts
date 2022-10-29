import {v1} from 'uuid';
import {ActionsTypes} from '../types/types';

export const SEND_MESSAGE = 'samurai-way/dialogs/SEND-MESSAGE';
export const UPDATE_NEW_MESSAGE_BODY = 'samurai-way/dialogs/UPDATE-NEW-MESSAGE-BODY';

type InitialStateType = typeof initialState;

export type DialogsDataType = {
  id: string
  name: string
}
export type MessagesDataType = {
  id: string
  message: string
}
export type DialogsPageType = {
  dialogs: DialogsDataType[]
  messages: MessagesDataType[]
  newMessageBody: string
}

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
};

export const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage: MessagesDataType = {
        id: v1(),
        message: state.newMessageBody,
      };
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, newMessage]
      };
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.text
      };
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