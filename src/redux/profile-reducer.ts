import {v1} from 'uuid'
import {ActionsTypes} from '../types/types'
import {Dispatch} from 'redux'
import {profileAPI} from '../api/api'

export const ADD_POST = 'social-network/profile/ADD_POST'
export const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE'
export const SET_STATUS = 'social-network/profile/SET_STATUS'

export type PostsDataType = {
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
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: { small: string, large: string }
}
export type ProfilePageType = {
  posts: PostsDataType[]
  profile: ProfileType
  status: string
}

export type InitialStateType = typeof initialState

const initialState = {
  posts: [
    {id: v1(), message: 'It\'s my first post', likesCount: 17},
    {id: v1(), message: 'Hi, how are you?', likesCount: 5},
  ] as Array<PostsDataType>,
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
    photos: {small: 'afsfaf', large: 'asfafs'},
  } as ProfileType,
  status: '',
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostsDataType = {
        id: v1(),
        message: action.text,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case SET_USER_PROFILE: {
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
    default:
      return state
  }
}

// action creators
export const addPost = (text: string) => ({type: ADD_POST, text} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

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
