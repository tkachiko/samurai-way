import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to={'/dialogs/1'} activeClassName={s.activeLink}>Emmet</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/2'} activeClassName={s.activeLink}>Marty</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/3'} activeClassName={s.activeLink}>Jennifer</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/4'} activeClassName={s.activeLink}>Lorraine</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={'/dialogs/5'} activeClassName={s.activeLink}>George</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hey!</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>Let's go!</div>
      </div>
    </div>
  );
};

export default Dialogs;