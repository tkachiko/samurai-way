import React from 'react';
import s from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={s.nav}>
      <ul>
        <li><a href={'./settings'}>Profile</a></li>
        <li><a href={'#'}>Messages</a></li>
        <li><a href={'#'}>News</a></li>
        <li><a href={'#'}>Music</a></li>
        <li><a href={'#'}>Settings</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;