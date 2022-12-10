import React from 'react';
import styles from './ProfileInfo.module.css';
import {Preloader} from '../../../common/Preloader/Preloader';
import {ProfilePropsType} from '../../Profile';
import {ProfileStatus} from './ProfileStatus';

const ProfileInfo: React.FC<ProfilePropsType> = (props) => {
  if (!props.profile) {
    return <Preloader/>;
  }

  return (
    <div>
      <div className={styles.main}>
        <img
          src={'https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-and-stars-shine_107791-7397.jpg?w=2000'}
          alt={'cover'}/>
        <div className={styles.descriptionBlock}>
          <img src={props.profile.photos.large} alt={'user avatar'}/>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;