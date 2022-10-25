import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {ActionsTypes, PostsDataType} from '../../../types/types';

type MyPostsType = {
  posts: PostsDataType[]
  newPostText: string
  dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer: React.FC<MyPostsType> = (props) => {

  const addPost = () => {
    props.dispatch(addPostAC(props.newPostText));
  };

  const onPostChange = (text: string) => {
    props.dispatch(updateNewPostTextAC(text));
  };

  return (
    <MyPosts posts={props.posts} newPostText={props.newPostText} addPost={addPost} updateNewPostText={onPostChange} />
  );
};

export default MyPostsContainer;