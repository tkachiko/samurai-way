import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import {DialogsDataType, MessagesDataType, PostsDataType} from './index';

type AppType = {
  dialogs: DialogsDataType[]
  messages: MessagesDataType[]
  posts: PostsDataType[]
}

const App = (props: AppType) => {
  return (
    <BrowserRouter>
      <div className={'appWrapper'}>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
          <Route path={'/profile'} render={() => <Profile posts={props.posts}/>} />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
