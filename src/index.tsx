import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {v1} from 'uuid';

export type DialogsDataType = {
  id: string
  name: string
}
export type MessagesDataType = {
  id: string
  message: string
}
export type PostsDataType = {
  id: string
  message: string
  likesCount: number
}

const dialogs: DialogsDataType[] = [
  {id: v1(), name: 'Emmett'},
  {id: v1(), name: 'Marty'},
  {id: v1(), name: 'Jennifer'},
  {id: v1(), name: 'Lorraine'},
  {id: v1(), name: 'George'},
];
const messages: MessagesDataType[] = [
  {id: v1(), message: 'Hey!'},
  {id: v1(), message: 'How are you?'},
  {id: v1(), message: 'Let\'s go!'},
];
const posts: PostsDataType[] = [
  {id: v1(), message: 'It\'s my first post', likesCount: 17},
  {id: v1(), message: 'Hi, how are you?', likesCount: 5},
];

ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts} />,
  document.getElementById('root')
);