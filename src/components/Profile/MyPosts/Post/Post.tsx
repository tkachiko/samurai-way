import React from 'react';
import styles from './Post.module.css';

type PostType = {
  id: string
  message: string
  like: number
}

const Post = (props: PostType) => {
  return (
    <div className={styles.item}>
      <img src={'https://thumbs.dreamstime.com/b/frenchbulldog-198912643.jpg'} alt={'user avatar'}/>
      {props.message}
      <div>
        <span>{props.like} likes</span>
      </div>
    </div>
  );
};

export default Post;