import React, {memo} from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import {MyPostsPropsType} from './MyPostsContainer'
import {AddNewPostFormDataType, AddPostForm} from './AddNewPostForm'

const MyPosts: React.FC<MyPostsPropsType> = memo((props) => {
  const postsElements = [...props.profilePage.posts]
    .reverse()
    .map(p => <Post id={p.id}
                    message={p.message}
                    like={p.likesCount}
                    key={p.id} />)

  const addPost = (formData: AddNewPostFormDataType) => {
    props.addPost(formData.newPostText)
  }

  return (
    <div className={styles.postsBlock}>My posts
      <AddPostForm onSubmit={addPost} />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  )
})

export default MyPosts