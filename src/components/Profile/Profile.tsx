import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import {PostsDataType} from '../../index';

type ProfileType = {
  posts: PostsDataType[]
}

const Profile = (props: ProfileType) => {
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