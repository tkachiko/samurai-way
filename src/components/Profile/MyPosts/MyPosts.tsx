import React, {RefObject} from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsDataType} from '../../../Redux/state';

type MyPostsType = {
  posts: PostsDataType[]
}

const MyPosts: React.FC<MyPostsType> = (props) => {
const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} like={p.likesCount} key={p.id}/>);

  let newPostElement = React.createRef<HTMLTextAreaElement>();

const addPost = () => {
  let text = newPostElement.current?.value
  alert(text)
}

  return (
    <div className={styles.postsBlock}>My posts
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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