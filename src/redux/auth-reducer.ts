import {ActionsTypes} from '../types/types';

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
  isAuth: true
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
export type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (email: string, userId: number, login: string) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
  }
} as const);
