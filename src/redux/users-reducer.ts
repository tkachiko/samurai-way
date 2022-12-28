import {ActionsTypes} from '../types/types'
import {usersAPI} from '../api/api'
import {Dispatch} from 'redux'

export const FOLLOW = 'samurai-way/users/FOLLOW'
export const UNFOLLOW = 'samurai-way/users/UNFOLLOW'
export const SET_USERS = 'samurai-way/users/SET_USERS'
export const SET_CURRENT_PAGE = 'samurai-way/users/SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'samurai-way/users/SET_TOTAL_USERS_COUNT'
export const TOGGLE_IS_FETCHING = 'samurai-way/users/TOGGLE_IS_FETCHING'
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'samurai-way/users/TOGGLE_IS_FOLLOWING_PROGRESS'

export type InitialStateType = typeof initialState

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
  followingInProgress: [2, 3],
}

export const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u),
      }
    case SET_USERS:
      return {
        ...state, users: action.users,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.pageNumber,
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state, totalUsersCount: action.totalCount,
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state, isFetching: action.isFetching,
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId),
      }
    default:
      return state
  }
}

// action creators
export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (pageNumber: number) => ({type: SET_CURRENT_PAGE, pageNumber} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  followingInProgress,
  userId,
} as const)

// thunk creators
export const requestUsers = (page: number, pageSize: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(page))
  usersAPI.getUsers(page, pageSize).then((data: any) => {
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  })
}

export const follow = (userId: number) => (dispatch: Dispatch) => {
  dispatch(toggleFollowingProgress(true, userId))
  usersAPI.follow(userId)
    .then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
}

export const unfollow = (userId: number) => (dispatch: Dispatch) => {
  dispatch(toggleFollowingProgress(true, userId))
  usersAPI.unfollow(userId)
    .then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
}



