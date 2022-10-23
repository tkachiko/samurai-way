import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';

export const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
});

export const store = createStore(reducers);