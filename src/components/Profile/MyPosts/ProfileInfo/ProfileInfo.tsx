import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.main}>
        <img
          src={'https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-and-stars-shine_107791-7397.jpg?w=2000'}
          alt={'cover'}/>
        <div className={s.descriptionBlock}>
          <img src={'https://thumbs.dreamstime.com/b/frenchbulldog-198912643.jpg'} alt={'user avatar'}/> + description
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;