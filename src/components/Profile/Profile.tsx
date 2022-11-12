import React from 'react';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';

export type ProfilePropsType = {
  profile: ProfileType
}

const Profile: React.FC<ProfilePropsType> = (props) => {

  return (
    <div>
      <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;