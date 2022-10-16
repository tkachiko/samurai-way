import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, PostsDataType} from '../../../Redux/state';

type MyPostsType = {
  posts: PostsDataType[]
  newPostText: string
  dispatch: (action: ActionsTypes) => void
}

const MyPosts: React.FC<MyPostsType> = (props) => {
  const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} like={p.likesCount} key={p.id}/>);

  const addPost = () => {
    props.dispatch({type: 'ADD-POST', text: props.newPostText});
  };

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', text: e.currentTarget.value});
  };

  return (
    <div className={styles.postsBlock}>My posts
      <div>
        <div>
          <textarea onChange={onPostChange}
                    value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;