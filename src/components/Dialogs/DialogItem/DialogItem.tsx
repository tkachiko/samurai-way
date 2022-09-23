import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
  name: string
  id: number
}

export const DialogItem = (props: DialogItemPropsType) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={s.activeLink}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;