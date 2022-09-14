import React from 'react';
import './../App.css'

function Navbar() {
  return (
    <nav className={'nav'}>
      <ul>
        <li>Profile</li>
        <li>Messages</li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </nav>
  )
}

export default Navbar;