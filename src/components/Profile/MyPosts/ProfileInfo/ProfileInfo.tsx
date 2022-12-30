import React from 'react'
import styles from './ProfileInfo.module.css'
import {Preloader} from '../../../common/Preloader/Preloader'
import {ProfilePropsType} from '../../Profile'
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks'

const ProfileInfo: React.FC<ProfilePropsType> = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.descriptionBlock}>
          <img src={props.profile.photos.large} alt={'user avatar'} />
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo