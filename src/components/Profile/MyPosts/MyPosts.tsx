import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import {PostsDataType} from '../../../redux/store';
import Post from './Post/Post';

type MyPostsType = {
  posts: PostsDataType[]
  newPostText: string
  addPost: () => void
  updateNewPostText: (text: string) => void
}

const MyPosts: React.FC<MyPostsType> = (props) => {
  const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} like={p.likesCount} key={p.id}/>);

  const addPost = () => {
    props.addPost();
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