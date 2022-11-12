import {addPostAC, updateNewPostTextAC} from '../redux/profile-reducer';
import {sendMessageAC, updateNewMessageBodyAC} from '../redux/dialogs-reducer';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from '../redux/users-reducer';

export type ActionsTypes =
  ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof updateNewMessageBodyAC>
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>