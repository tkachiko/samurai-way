import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsDataType} from '../../../Redux/state';

type MyPostsType = {
  posts: PostsDataType[]
  addPost: (message: string) => void
  newPostText: string
  updateNewPostText: (text: string) => void
}

const MyPosts: React.FC<MyPostsType> = (props) => {
  const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} like={p.likesCount} key={p.id}/>);

  const addPost = () => {
    props.addPost(props.newPostText);
  };

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget.value);
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