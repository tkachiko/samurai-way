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
  addPost: () => void
  updateNewPostText: (text: string) => void
  subscribe: (observer: () => void) => void
}


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
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log();
  },
  addPost() {
    const newPost: PostsDataType = {
      id: v1(),
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber();
  },
  updateNewPostText(text: string) {
    this._state.profilePage.newPostText = text;
    this._callSubscriber();
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
};
