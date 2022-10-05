import {v1} from 'uuid';

let renderTree = (state: StateType) => {
  console.log(state);
}

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

export const state: StateType = {
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
};

export const addPost = () => {
  const newPost: PostsDataType = {
    id: v1(),
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderTree(state);
};

export const updateNewPostText = (text: string) => {
  state.profilePage.newPostText = text;
  renderTree(state);
};

export const subscribe = (observer: (state: StateType) => void) => {
  renderTree = observer
}