import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsDataType} from '../../../Redux/state';

type MyPostsType = {
  posts: PostsDataType[]
}

const MyPosts: React.FC<MyPostsType> = (props) => {
const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} like={p.likesCount} key={p.id}/>);

  return (
    <div className={styles.postsBlock}>My posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;