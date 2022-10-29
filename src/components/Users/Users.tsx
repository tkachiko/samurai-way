import React from 'react';
import {UsersPropsType} from './UsersContainer';
import styles from './Users.module.css';

const Users = (props: UsersPropsType) => {
  if (props.usersPage.users.length === 0) {
    props.setUsers([
      {id: 1, photoURL: 'https://i.pinimg.com/originals/5a/6b/18/5a6b18e5bc84c9c407189abf424bcc13.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss!', location: {city: 'Minsk', country: 'Belarus'}},
      {id: 2, photoURL: 'https://i.pinimg.com/originals/5a/6b/18/5a6b18e5bc84c9c407189abf424bcc13.jpg', followed: true, fullName: 'Sergey', status: 'I am looking for a job', location: {city: 'Moscow', country: 'Russia'}},
      {id: 3, photoURL: 'https://i.pinimg.com/originals/5a/6b/18/5a6b18e5bc84c9c407189abf424bcc13.jpg', followed: false, fullName: 'Andrew', status: 'I can fly!', location: {city: 'New York', country: 'USA'}},
    ])
  }
  return (
    <div>
      {props.usersPage.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoURL} className={styles.userPhoto} alt="user avatar"/>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              : <button onClick={() => props.follow(u.id)}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
          <div>{u.location.city}</div>
            <div>{u.location.country}</div>
        </span>
        </span>
      </div>)}
    </div>
  );
};

export default Users;