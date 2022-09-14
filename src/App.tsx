import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className={'appWrapper'}>
      <Header/>
      <Navbar/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
