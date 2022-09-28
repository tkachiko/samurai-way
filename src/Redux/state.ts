import {v1} from 'uuid';

export type DialogsDataType = {
  id: string
  name: string
}
export type PostsDataType = {
  id: string
  message: string
  likesCount: number
}
export type MessagesDataType = {
  id: string
  message: string
}

type ProfilePageType = {
  posts: PostsDataType[]
}
type DialogsPageType = {
  dialogs: DialogsDataType[]
  messages: MessagesDataType[]
}

export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

export const state: StateType = {
  profilePage: {
    posts: [
      {id: v1(), message: 'It\'s my first post', likesCount: 17},
      {id: v1(), message: 'Hi, how are you?', likesCount: 5},
    ],
  },
  dialogsPage: {
    dialogs: [
      {id: v1(), name: 'Emmett'},
      {id: v1(), name: 'Marty'},
      {id: v1(), name: 'Jennifer'},
      {id: v1(), name: 'Lorraine'},
      {id: v1(), name: 'George'},
    ],
    messages: [
      {id: v1(), message: 'Hey!'},
      {id: v1(), message: 'How are you?'},
      {id: v1(), message: 'Let\'s go!'},
    ],
  }
};