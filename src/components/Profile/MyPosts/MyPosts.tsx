import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>My posts
      <div>
        <textarea></textarea>
        <button>Add</button>
      </div>
      <div className={s.posts}>
        <Post message={`It's my first post`} like={4}/>
        <Post message={`Hi, how are you?`} like={2}/>
      </div>
    </div>
  )
}

export default MyPosts;