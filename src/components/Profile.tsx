import React from 'react';

const Profile = () => {
  return (
    <div className={'content'}>
      <div className={'main'}>
        <img
          src={'https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-and-stars-shine_107791-7397.jpg?w=2000'}
          alt={'cover'}/>
      </div>
      <div>ava + description</div>
      <div>My posts
        <div>new post</div>
        <div>
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;