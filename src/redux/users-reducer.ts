import {ActionsTypes} from '../types/types';

export const FOLLOW = 'samurai-way/users/FOLLOW';
export const UNFOLLOW = 'samurai-way/users/UNFOLLOW';
export const SET_USERS = 'samurai-way/users/SET-USERS';

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

export type InitialStateType = typeof initialState

const initialState = {
  users: [
    // {
    //   id: v1(), photoURL: 'https://i.pinimg.com/originals/5a/6b/18/5a6b18e5bc84c9c407189abf424bcc13.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss!', location: {
    //     city: 'Minsk', country: 'Belarus'
    //   }
    // },
    // {
    //   id: v1(), photoURL: 'https://i.pinimg.com/originals/5a/6b/18/5a6b18e5bc84c9c407189abf424bcc13.jpg', followed: true, fullName: 'Sergey', status: 'I am looking for a job', location: {
    //     city: 'Moscow', country: 'Russia'
    //   }
    // },
    // {
    //   id: v1(), photoURL: 'https://i.pinimg.com/originals/5a/6b/18/5a6b18e5bc84c9c407189abf424bcc13.jpg', followed: false, fullName: 'Andrew', status: 'I can fly!', location: {
    //     city: 'New York', country: 'USA'
    //   }
    // },
  ] as Array<UserType>,
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
        ...state, users: [...state.users, ...action.users]
      };
    default:
      return state;
  }
};

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const);
