import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user-image.png';
import {UserType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {default as axios} from 'axios';
import {API_KEY} from '../../secret-variables';

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
            <NavLink to={`/profile/${u.id}`}>
            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}
                 alt="user avatar"/>
              </NavLink>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {
                axios
                  .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {
                      'API-KEY': API_KEY
                    }
                  })
                  .then((response: any) => {
                    if(response.data.resultCode === 0) {
                      props.unfollow(u.id);
                    }
                  });
              }}>Unfollow</button>
              : <button onClick={() => {
                axios
                  .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      'API-KEY': API_KEY
                    }
                  })
                  .then((response: any) => {
                    if(response.data.resultCode === 0) {
                      props.follow(u.id);
                    }
                  });
              }}>Follow</button>}
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