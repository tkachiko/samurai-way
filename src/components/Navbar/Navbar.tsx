import React from 'react';
import s from './Navbar.module.css';
import Link from './Link';

function Navbar() {
  return (
    <nav className={s.nav}>
      <ul>
        <Link url={'./profile'} title={'Profile'}/>
        <Link url={'./dialogs'} title={'Messages'}/>
        <Link url={'./news'} title={'News'}/>
        <Link url={'./music'} title={'Music'}/>
        <Link url={'./settings'} title={'Settings'}/>
      </ul>
    </nav>
  );
}

export default Navbar;