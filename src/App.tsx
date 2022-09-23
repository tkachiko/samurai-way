import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <BrowserRouter>
      <div className={'appWrapper'}>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path={'/dialogs'} component={Dialogs} />
          <Route path={'/profile'} component={Profile} />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
