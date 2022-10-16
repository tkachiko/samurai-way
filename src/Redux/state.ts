import {v1} from 'uuid';

export type DialogsDataType = {
  id: string
  name: string
}
export type PostsDataType = {
  id: string
  message: string
  likesCount: number
}
export type MessagesDataType = {
  id: string
  message: string
}
type ProfilePageType = {
  posts: PostsDataType[]
  newPostText: string
}
type DialogsPageType = {
  dialogs: DialogsDataType[]
  messages: MessagesDataType[]
}
export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}
export type StoreType = {
  _state: StateType
  getState: () => StateType
  _callSubscriber: () => void
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: v1(), message: 'It\'s my first post', likesCount: 17},
        {id: v1(), message: 'Hi, how are you?', likesCount: 5},
      ],
      newPostText: 'it-kamasutra.com',
    },
    dialogsPage: {
      dialogs: [
        {id: v1(), name: 'Emmett'},
        {id: v1(), name: 'Marty'},
        {id: v1(), name: 'Jennifer'},
        {id: v1(), name: 'Lorraine'},
        {id: v1(), name: 'George'},
      ],
      messages: [
        {id: v1(), message: 'Hey!'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Let\'s go!'},
      ],
    }
  },
  _callSubscriber() {
    console.log();
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost: PostsDataType = {
        id: v1(),
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber();
    }
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