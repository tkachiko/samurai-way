import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import {StateType} from './Redux/state';

type AppType = {
  state: StateType
}

const App: React.FC<AppType> = (props ) => {
  return (
    <BrowserRouter>
      <div className={'appWrapper'}>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path={'/dialogs'}
                 render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                        messages={props.state.dialogsPage.messages}/>}/>
          <Route path={'/profile'} render={() => <Profile posts={props.state.profilePage.posts}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
