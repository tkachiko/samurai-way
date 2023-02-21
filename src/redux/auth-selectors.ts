import {RootStateType} from './redux-store'

export const selectIsAuth = (state: RootStateType) => {
  return state.auth.isAuth
}

export const selectCurrentUserLogin = (state: RootStateType) => {
  return state.auth.login
}


