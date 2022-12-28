import React, {FC, memo} from 'react'
import styles from './MyPosts.module.css'
import {Post} from './Post/Post'
import {MyPostsPropsType} from './MyPostsContainer'
import {AddNewPostFormDataType, AddPostForm} from './AddNewPostForm'

export const MyPosts: FC<MyPostsPropsType> = memo(({profilePage, addPost}) => {
  const postsElements = [...profilePage.posts]
    .reverse()
    .map(p => <Post message={p.message}
                    like={p.likesCount}
                    key={p.id}
    />)

  const onAddPost = (formData: AddNewPostFormDataType) => {
    addPost(formData.newPostText)
  }

  return (
    <div className={styles.postsBlock}>My posts
      <AddPostForm onSubmit={onAddPost} />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  )
})