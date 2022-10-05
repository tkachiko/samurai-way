import React from 'react';
import './index.css';
import {state, StateType, subscribe} from './Redux/state';
import {addPost, updateNewPostText} from './Redux/state';
import ReactDOM from 'react-dom';
import App from './App';

const renderTree = (state: StateType) => {
  ReactDOM.render(
    <App state={state}
         addPost={addPost}
         updateNewPostText={updateNewPostText}
    />,
    document.getElementById('root')
  );
};

renderTree(state);

subscribe(renderTree);