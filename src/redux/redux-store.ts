import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';

type RootState = typeof rootReducers;

export type ReduxStateType = ReturnType<RootState>

export type StoreType = typeof store

export const rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
});

export const store = createStore(rootReducers);
