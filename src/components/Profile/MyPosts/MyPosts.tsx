import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type PostsDataType = {
  id: number
  message: string
  likesCount: number
}

const MyPosts = () => {
  const posts: PostsDataType[] = [
    {id: 1, message: 'It\'s my first post', likesCount: 17},
    {id: 2, message: 'Hi, how are you?', likesCount: 5},
  ];

  const postsElements = posts.map(p => <Post id={p.id} message={p.message} like={p.likesCount} key={p.id}/>);

  return (
    <div className={s.postsBlock}>My posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;