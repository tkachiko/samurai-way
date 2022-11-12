import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user-image.png';
import {UserType} from '../../redux/users-reducer';

type UsersComponentType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersComponentType) => {
  let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return <span className={props.currentPage === p ? styles.selectedPage : ''}
                       onClick={() => props.onPageChanged(p)}
                       key={p}
          >{p}</span>;
        })}
      </div>
      {props.users.map((u) => <div key={u.id}>
        <span>
          <div>
            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}
                 alt="user avatar"/>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              : <button onClick={() => props.follow(u.id)}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
        </span>
      </div>)}
    </div>
  );
};

export default Users;