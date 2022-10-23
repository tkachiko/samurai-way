import {addPostAC, updateNewPostTextAC} from '../redux/profile-reducer';
import {sendMessageAC, updateNewMessageBodyAC} from '../redux/dialogs-reducer';

export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}
export type PostsDataType = {
  id: string
  message: string
  likesCount: number
}
export type ProfilePageType = {
  posts: PostsDataType[]
  newPostText: string
}
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
export type ActionsTypes =
  ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof updateNewMessageBodyAC>