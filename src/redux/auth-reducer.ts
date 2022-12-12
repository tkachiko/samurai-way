import {ActionsTypes} from '../types/types';
import {authAPI} from '../api/api';
import {Dispatch} from 'redux';

export const SET_USER_DATA = 'samurai-way/users/SET_USER_DATA';

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
  isAuth: false
};

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    default:
      return state;
  }
};

// action creators
export const setAuthUserData = (email: string, userId: number, login: string) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
  }
} as const);

// thunk creators
export const getAuthUserData = () => (dispatch: Dispatch) => {
  authAPI.me()
    .then((response: any) => {
      if (response.data.resultCode === 0) {
        const {email, id, login} = response.data.data;
        dispatch(setAuthUserData(email, id, login));
      }
    });
};