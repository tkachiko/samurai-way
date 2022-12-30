import {ActionsTypes} from '../types/types'
import {authAPI} from '../api/api'
import {Dispatch} from 'redux'

export const SET_USER_DATA = 'social-network/auth/SET_USER_DATA'
export const STOP_SUBMIT = 'social-network/auth/STOP_SUBMIT'

export type AuthType = {
  id?: number,
  email?: string,
  login: string,
  isFetching?: boolean,
  isAuth: boolean,
}

export type InitialStateType = typeof initialState

const initialState = {
  userId: null as null | number,
  email: null as null | string,
  login: null as null | string,
  isFetching: false,
  error: null as null | string,
  isAuth: false,
}

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case STOP_SUBMIT:
      return {...state, error: action.error}
    default:
      return state
  }
}

// action creators
export const setAuthUserData = (email: string | null, userId: number | null, login: string | null, isAuth: boolean) => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth,
  },
} as const)
export const stopSubmit = (error: null | string) =>
  ({type: STOP_SUBMIT, error} as const)

// thunk creators
export const getAuthUserData = () => async (dispatch: Dispatch) => {
  const response = await authAPI.me()
  if (response.data.resultCode === 0) {
    const {email, id, login} = response.data.data
    dispatch(setAuthUserData(email, id, login, true))
  }
}
export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch | any) => {
  const response = await authAPI.login(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
    dispatch(stopSubmit(null))
  } else {
    const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
    dispatch(stopSubmit(message))
  }
}
export const logout = () => async (dispatch: Dispatch) => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}