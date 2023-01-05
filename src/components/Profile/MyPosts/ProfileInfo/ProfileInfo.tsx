import React, {ChangeEvent} from 'react'
import styles from './ProfileInfo.module.css'
import {Preloader} from '../../../common/Preloader/Preloader'
import {ProfilePropsType} from '../../Profile'
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks'
import userPhoto from '../../../../assets/images/user-image.png'

const ProfileInfo: React.FC<ProfilePropsType> = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      props.updatePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.descriptionBlock}>
          <img src={props.profile.photos.large || userPhoto} alt={'user avatar'} />
          {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo