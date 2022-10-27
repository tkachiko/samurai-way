import {addPostAC, updateNewPostTextAC} from '../redux/profile-reducer';
import {sendMessageAC, updateNewMessageBodyAC} from '../redux/dialogs-reducer';

export type ActionsTypes =
  ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof updateNewMessageBodyAC>