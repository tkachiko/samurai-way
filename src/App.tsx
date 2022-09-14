import React from 'react';
import './App.css';
import {Header} from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className={'appWrapper'}>
      <Header/>
      <Navbar/>
      <div className={'main'}>
        <img
          src={'https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-and-stars-shine_107791-7397.jpg?w=2000'}
          alt={'cover'}/>
        <div className={'content'}>
          <div>ava + description</div>
          <div>My posts
            <div>new post</div>
            <div>
              <div>post1</div>
              <div>post2</div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
