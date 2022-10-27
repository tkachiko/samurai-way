import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {StoreContext} from '../../../StoreContext';

const MyPostsContainer: React.FC = () => {
  return (
    <StoreContext.Consumer>{
      (store) => {
        const state = store.getState().profilePage;
        const addPost = () => {
          store.dispatch(addPostAC(state.newPostText));
        };

        const onPostChange = (text: string) => {
          store.dispatch(updateNewPostTextAC(text));
        };

        return <MyPosts posts={state.posts}
                        newPostText={state.newPostText}
                        addPost={addPost}
                        updateNewPostText={onPostChange}/>;
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;