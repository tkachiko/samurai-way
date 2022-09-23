import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div>
      <div>
        <ProfileInfo/>
        <MyPosts/>
      </div>
    </div>
  );
};

export default Profile;