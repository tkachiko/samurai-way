import React, {FC} from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

export type LinkPropsType = {
  url: string
  title: string
}

export const Link: FC<LinkPropsType> = ({url, title}) => {
  return (
    <li className={s.item}>
      <NavLink to={url} activeClassName={s.activeLink}>{title}</NavLink>
    </li>
  )
}