import {ActionsTypes, PostsDataType, ProfilePageType} from './state';
import {v1} from 'uuid';

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
  switch (action.type) {
    case ADD_POST:
      const newPost: PostsDataType = {
        id: v1(),
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;
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
