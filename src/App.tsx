import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes, StateType} from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';

type AppType = {
  state: StateType
  dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppType> = (props) => {
  return (
    <BrowserRouter>
      <div className={'appWrapper'}>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path={'/dialogs'}
                 render={() => <DialogsContainer dialogs={props.state.dialogsPage.dialogs}
                                        dispatch={props.dispatch}
                                        messages={props.state.dialogsPage.messages}
                                        newMessageBody={props.state.dialogsPage.newMessageBody}
                 />}
          />
          <Route path={'/profile'}
                 render={() => <Profile posts={props.state.profilePage.posts}
                                        dispatch={props.dispatch}
                                        newPostText={props.state.profilePage.newPostText}
                 />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
