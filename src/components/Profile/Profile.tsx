import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import {PostsDataType} from '../../Redux/state';

type ProfileType = {
  posts: PostsDataType[]
}

const Profile: React.FC<ProfileType> = (props) => {
  return (
    <div>
      <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
      </div>
    </div>
  );
};

export default Profile;