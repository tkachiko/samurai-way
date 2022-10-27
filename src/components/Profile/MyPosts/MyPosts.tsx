import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  const postsElements = props.profilePage.posts.map(p => <Post id={p.id} message={p.message} like={p.likesCount} key={p.id}/>);

  const addPost = () => {
    props.addPost(props.profilePage.newPostText);
  };

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget.value);
  };

  return (
    <div className={styles.postsBlock}>My posts
      <div>
        <div>
          <textarea onChange={onPostChange}
                    value={props.profilePage.newPostText}
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