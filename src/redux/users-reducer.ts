import {ActionsTypes} from '../types/types';

export const FOLLOW = 'samurai-way/users/FOLLOW';
export const UNFOLLOW = 'samurai-way/users/UNFOLLOW';
export const SET_USERS = 'samurai-way/users/SET_USERS';
export const SET_CURRENT_PAGE = 'samurai-way/users/SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'samurai-way/users/SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING = 'samurai-way/users/TOGGLE_IS_FETCHING';

type InitialStateType = typeof initialState

type UsersLocationType = {
  city: string
  country: string
}

export type UserType = {
  id: number
  photos: { large: string, small: string }
  followed: boolean
  name: string
  status: string
  location: UsersLocationType
}

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 55,
  currentPage: 1,
  isFetching: false,
};

export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
      };
      case SET_USERS:
      return {
        ...state, users: action.users
      };
      case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.pageNumber
      };
      case SET_TOTAL_USERS_COUNT:
      return {
        ...state, totalUsersCount: action.totalCount
      };
      case TOGGLE_IS_FETCHING:
      return {
        ...state, isFetching: action.isFetching
      };
    default:
      return state;
  }
};

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const);
export const setCurrentPageAC = (pageNumber: number) => ({type: SET_CURRENT_PAGE, pageNumber} as const);
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const);
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const);
