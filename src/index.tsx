import React from 'react';
import './index.css';
import {store} from './Redux/state';
import ReactDOM from 'react-dom';
import App from './App';

const renderTree = () => {
  ReactDOM.render(
    <App state={store.getState()}
         dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root')
  );
};

renderTree();

store.subscribe(renderTree);