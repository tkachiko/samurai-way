import React from 'react';
import styles from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
  name: string
  id: number
}

export const DialogItem = (props: DialogItemPropsType) => {
  return (
    <div className={`${styles.dialog} ${styles.active}`}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={styles.activeLink}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;