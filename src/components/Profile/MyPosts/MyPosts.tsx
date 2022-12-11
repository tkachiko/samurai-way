import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {AddNewPostForm, AddNewPostFormDataType} from './AddNewPostForm';
import {reduxForm} from 'redux-form';

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  const postsElements = props.profilePage.posts.map(p => <Post id={p.id} message={p.message} like={p.likesCount}
                                                               key={p.id}/>);

  const addPost = (formData: AddNewPostFormDataType) => {
    props.addPost(formData.newPostText);
  };

  return (
    <div className={styles.postsBlock}>My posts
      <AddPostForm onSubmit={addPost}/>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

const AddPostForm = reduxForm<AddNewPostFormDataType>({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;