import {
  addPost,
  saveProfileSuccess,
  setStatus,
  setUserProfile,
  stopProfileSubmit,
  updatePhotoSuccess,
} from '../redux/profile-reducer'
import {sendMessage} from '../redux/dialogs-reducer'
import {
  followSuccess,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFollowingProgress,
  toggleIsFetching,
  unfollowSuccess,
} from '../redux/users-reducer'
import {setAuthUserData, stopSubmit} from '../redux/auth-reducer'
import {initializedSuccess} from '../redux/app-reducer'

export type ActionsTypes =
  | ReturnType<typeof addPost>
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
  | ReturnType<typeof initializedSuccess>
  | ReturnType<typeof stopSubmit>
  | ReturnType<typeof updatePhotoSuccess>
  | ReturnType<typeof saveProfileSuccess>
  | ReturnType<typeof stopProfileSubmit>

export type PostType = {
  id: string
  message: string
  likesCount: number
}
export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type PhotosType = {
  small: string | null
  large: string | null
}
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
  aboutMe: string
}

export type UserType = {
  id: number
  name: string
  status: string
  photos: PhotosType
  followed: boolean
}