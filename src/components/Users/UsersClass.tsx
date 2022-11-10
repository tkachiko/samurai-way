import React from 'react';
import {UsersPropsType} from './UsersContainer';
import styles from './Users.module.css';
import {default as axios} from 'axios';
import userPhoto from '../../assets/images/user-image.png';

class Users extends React.Component<UsersPropsType> {
  constructor(props: UsersPropsType ) {
    super(props);

      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response: any) => {
          this.props.setUsers(response.data.items);
        });
  }

  render() {
    return <div>
      {this.props.usersPage.users.map((u) => <div key={u.id}>
        <span>
          <div>
            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}
                 alt="user avatar"/>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
              : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
          <div>{'u.location.city'}</div>
            <div>{'u.location.country'}</div>
        </span>
        </span>
      </div>)}
    </div>;
  }
}

export default Users;