import {applyMiddleware, combineReducers, createStore} from 'redux'
import {profileReducer} from './profile-reducer'
import {dialogsReducer} from './dialogs-reducer'
import {usersReducer} from './users-reducer'
import {authReducer} from './auth-reducer'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from './app-reducer'
import {ActionsTypes} from '../types/types'

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, ActionsTypes>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store