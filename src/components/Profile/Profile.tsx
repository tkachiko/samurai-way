import React from 'react';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';

export type ProfilePropsType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {

  return (
    <div>
      <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;