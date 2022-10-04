import {addPost, StateType, updateNewPostText} from './Redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

export const renderTree = (state: StateType) => {
  ReactDOM.render(
    <App state={state}
         addPost={addPost}
         updateNewPostText={updateNewPostText}
    />,
    document.getElementById('root')
  );
};