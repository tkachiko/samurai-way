import React, {FC} from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user-image.png'
import {UserType} from '../../redux/users-reducer'
import {NavLink} from 'react-router-dom'

type UsersComponentType = {
  user: UserType
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  followingInProgress: Array<number>
}

export const User: FC<UsersComponentType> = ({user, followingInProgress, unfollow, follow}) => {
  return (
    <div>
        <span>
          <div>
            <NavLink to={`/profile/${user.id}`}>
            <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto}
                 alt="user avatar" />
              </NavLink>
          </div>
          <div>
            {user.followed
              ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                unfollow(user.id)
              }}>Unfollow</button>
              : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                follow(user.id)
              }}>Follow</button>}
          </div>
        </span>
      <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
        </span>
    </div>
  )
}
