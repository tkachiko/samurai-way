import {v1} from 'uuid';
import {ActionsTypes} from '../types/types';

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostsDataType = {
  id: string
  message: string
  likesCount: number
}
export type ProfilePageType = {
  posts: PostsDataType[]
  newPostText: string
}

type InitialStateType = typeof initialState

const initialState = {
  posts: [
    {id: v1(), message: 'It\'s my first post', likesCount: 17},
    {id: v1(), message: 'Hi, how are you?', likesCount: 5},
  ] as Array<PostsDataType>,
  newPostText: 'it-kamasutra.com' as string,
};

export const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostsDataType = {
        id: v1(),
        message: state.newPostText,
        likesCount: 0
      };
      const stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = {...state};
      stateCopy.newPostText = action.text;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostAC = (text: string) => ({
    type: ADD_POST,
    text
  } as const
);
export const updateNewPostTextAC = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
  } as const
);
