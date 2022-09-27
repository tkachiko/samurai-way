import React from 'react';
import s from './Post.module.css';

type PostType = {
  id: number
  message: string
  like: number
}

const Post = (props: PostType) => {
  return (
    <div className={s.item}>
      <img src={'https://thumbs.dreamstime.com/b/frenchbulldog-198912643.jpg'} alt={'user avatar'}/>
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;