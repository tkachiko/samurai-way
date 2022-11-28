import {addPost, setUserProfile, updateNewPostText} from '../redux/profile-reducer';
import {sendMessage, updateNewMessageBody} from '../redux/dialogs-reducer';
import {
  followSuccess,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFollowingProgress,
  toggleIsFetching,
  unfollowSuccess
} from '../redux/users-reducer';
import {setAuthUserData} from '../redux/auth-reducer';

export type ActionsTypes =
  ReturnType<typeof addPost>
  | ReturnType<typeof updateNewPostText>
  | ReturnType<typeof sendMessage>
  | ReturnType<typeof updateNewMessageBody>
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof toggleFollowingProgress>