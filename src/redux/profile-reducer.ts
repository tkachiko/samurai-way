import {v1} from 'uuid'
import {ActionsTypes, PhotosType, PostType, ProfileType} from '../types/types'
import {Dispatch} from 'redux'
import {profileAPI} from '../api/api'

export const ADD_POST = 'social-network/profile/ADD_POST'
export const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE'
export const SET_STATUS = 'social-network/profile/SET_STATUS'
export const SAVE_PHOTO_SUCCESS = 'social-network/profile/SAVE_PHOTO_SUCCESS'
export const SAVE_PROFILE_SUCCESS = 'social-network/profile/SAVE_PROFILE_SUCCESS'
export const STOP_SUBMIT = 'social-network/profile/STOP_SUBMIT'

export type ProfilePageType = {
  posts: PostType[]
  profile: ProfileType
  status: string
}

export type InitialStateType = typeof initialState

const initialState = {
  posts: [
    {id: v1(), message: 'It\'s my first post', likesCount: 17},
    {id: v1(), message: 'Hi, how are you?', likesCount: 5},
  ] as PostType[],
  profile: {
    userId: 1,
    lookingForAJob: false,
    lookingForAJobDescription: 'yes',
    fullName: 'Some Name',
    contacts: {
      github: 'null',
      vk: 'null',
      facebook: 'null',
      instagram: 'null',
      twitter: 'null',
      website: 'null',
      youtube: 'null',
      mainLink: 'null',
    },
    photos: {small: '', large: ''},
  } as ProfileType,
  status: '',
  error: null as string | null,
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostType = {
        id: v1(),
        message: action.text,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case SET_USER_PROFILE:
    case SAVE_PROFILE_SUCCESS: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    case SAVE_PHOTO_SUCCESS: {
      return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
    }
    case STOP_SUBMIT:
      return {...state, error: action.error}
    default:
      return state
  }
}

// action creators
export const addPost = (text: string) => ({type: ADD_POST, text} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const updatePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)
export const saveProfileSuccess = (profile: ProfileType) => ({type: SAVE_PROFILE_SUCCESS, profile} as const)
export const stopProfileSubmit = (error: string) => ({type: STOP_SUBMIT, error} as const)


// thunk creators
export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
  const response = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
export const updatePhoto = (file: File) => async (dispatch: Dispatch) => {
  const response = await profileAPI.updatePhoto(file)
  if (response.resultCode === 0) {
    dispatch(updatePhotoSuccess(response.data.photos))
  }
}
export const saveProfile =
  (profile: ProfileType, setEditMode: (isEdit: boolean) => void) =>
    async (dispatch: any, getState: any) => {
      try {
        const userId = getState().auth.userId
        const response = await profileAPI.saveProfile(profile)

        if (response.resultCode === 0) {
          dispatch(getUserProfile(userId))
          setEditMode(false)
        } else {
          let error =
            response.messages.length > 0
              ? response.messages[0]
              : 'Some error'
          console.log(error)
          dispatch(stopProfileSubmit(error))
          setEditMode(true)
        }
      } catch (e) {
        console.warn('Some error')
      }
    }