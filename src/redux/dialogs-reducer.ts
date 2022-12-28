import {v1} from 'uuid'
import {ActionsTypes} from '../types/types'

export const SEND_MESSAGE = 'samurai-way/dialogs/SEND-MESSAGE'

export type InitialStateType = typeof initialState;

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
}

export const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage: MessagesDataType = {
        id: v1(),
        message: action.text,
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
      }
    default:
      return state
  }
}

// action creators
export const sendMessage = (text: string) => ({type: SEND_MESSAGE, text} as const)