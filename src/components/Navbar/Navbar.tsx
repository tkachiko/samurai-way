import React from 'react'
import styles from './Navbar.module.css'
import {Link} from './Link'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <Link url={'/profile'} title={'Profile'} />
        <Link url={'/dialogs'} title={'Messages'} />
        <Link url={'/developers'} title={'Developers'} />
      </ul>
    </nav>
  )
}