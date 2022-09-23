import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

export type LinkPropsType = {
  url: string
  title: string
}

const Link = (props: LinkPropsType) => {
  return (
    <li className={s.item}>
      <NavLink to={props.url} activeClassName={s.activeLink}>{props.title}</NavLink>
    </li>
  );
};

export default Link;