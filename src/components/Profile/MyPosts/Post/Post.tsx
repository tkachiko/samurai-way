import React, {FC} from 'react'
import styles from './Post.module.css'

type PostType = {
  message: string
  like: number
}

export const Post: FC<PostType> = ({message, like}) => {
  return (
    <div className={styles.item}>
      <img src={'https://thumbs.dreamstime.com/b/frenchbulldog-198912643.jpg'} alt={'user avatar'} />
      {message}
      <div>
        <span>{like} likes</span>
      </div>
    </div>
  )
}