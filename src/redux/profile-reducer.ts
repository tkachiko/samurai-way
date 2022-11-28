import {v1} from 'uuid';
import {ActionsTypes} from '../types/types';
import {Dispatch} from 'redux';
import {usersAPI} from '../API/API';

export const ADD_POST = 'samurai-way/profile/ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'samurai-way/profile/UPDATE_NEW_POST_TEXT';
export const SET_USER_PROFILE = 'samurai-way/profile/SET_USER_PROFILE';

export type PostsDataType = {
  id: string
  message: string
  likesCount: number
}
export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: { small: string, large: string }
}
export type ProfilePageType = {
  posts: PostsDataType[]
  newPostText: string
  profile: ProfileType
}

type InitialStateType = typeof initialState

const initialState = {
  posts: [
    {id: v1(), message: 'It\'s my first post', likesCount: 17},
    {id: v1(), message: 'Hi, how are you?', likesCount: 5},
  ] as Array<PostsDataType>,
  newPostText: 'it-kamasutra.com' as string,
  profile: {
    userId: 1,
    lookingForAJob: false,
    lookingForAJobDescription: 'yes',
    fullName: 'Some Name',
    contacts: {
      github: 'null',
      vk: 'null',
      facebook: 'null',
      instagram: 'null',
      twitter: 'null',
      website: 'null',
      youtube: 'null',
      mainLink: 'null',
    },
    photos: {small: 'afsfaf', large: 'asfafs'}
  } as ProfileType
};

export const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostsDataType = {
        id: v1(),
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    default:
      return state;
  }
};

// action creators
export const addPost = (text: string) => ({type: ADD_POST, text} as const);
export const updateNewPostText = (text: string) => ({type: UPDATE_NEW_POST_TEXT, text} as const);
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const);

// thunk creators
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
  usersAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data));
    });
};
