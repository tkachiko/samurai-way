import {addPost, setStatus, setUserProfile} from '../redux/profile-reducer';
import {sendMessage} from '../redux/dialogs-reducer';
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
  | ReturnType<typeof sendMessage>
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof toggleFollowingProgress>
  | ReturnType<typeof setStatus>