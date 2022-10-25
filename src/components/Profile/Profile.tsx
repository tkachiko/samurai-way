import React from 'react';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ActionsTypes, PostsDataType} from '../../types/types';

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
        <MyPostsContainer posts={props.posts}
                 newPostText={props.newPostText}
                 dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Profile;