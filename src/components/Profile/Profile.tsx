import React from 'react';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile: React.FC = () => {
  return (
    <div>
      <div>
        <ProfileInfo/>
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;