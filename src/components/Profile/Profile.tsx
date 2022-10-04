import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import {PostsDataType} from '../../Redux/state';

type ProfileType = {
  posts: PostsDataType[]
  addPost: (message: string) => void
  newPostText: string
  updateNewPostText: (text: string) => void
}

const Profile: React.FC<ProfileType> = (props) => {
  return (
    <div>
      <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}
                 addPost={props.addPost}
                 newPostText={props.newPostText}
                 updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  );
};

export default Profile;