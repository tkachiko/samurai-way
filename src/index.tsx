import React from 'react';
import './index.css';
import {store} from './redux/redux-store';
import ReactDOM from 'react-dom';
import App from './App';
import {StateType} from './types/types';

const renderTree = (state: StateType) => {
  ReactDOM.render(
    <App state={state}
         dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root')
  );
};

renderTree(store.getState());

store.subscribe(() => {
  const state = store.getState();
  renderTree(state);
});