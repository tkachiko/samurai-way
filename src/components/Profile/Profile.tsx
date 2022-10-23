import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import {ActionsTypes, PostsDataType} from '../../redux/store';

type ProfileType = {
  posts: PostsDataType[]
  newPostText: string
  dispatch: (action: ActionsTypes) => void
}

const Profile: React.FC<ProfileType> = (props) => {
  return (
    <div>
      <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}
                 newPostText={props.newPostText}
                 dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Profile;