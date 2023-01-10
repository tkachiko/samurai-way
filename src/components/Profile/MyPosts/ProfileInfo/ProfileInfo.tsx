import React, {ChangeEvent, useState} from 'react'
import styles from './ProfileInfo.module.css'
import {Preloader} from '../../../common/Preloader/Preloader'
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks'
import userPhoto from '../../../../assets/images/user-image.png'
import {ProfileType} from '../../../../types/types'
import {ProfileData} from './ProfileData/ProfileData'
import {ProfileDataForm} from './ProfileData/ProfileDataForm'

type PropsType = {
  profile: ProfileType
  status: string
  isOwner: boolean
  error: string | null
  updateStatus: (status: string) => void
  updatePhoto: (file: File) => void
  saveProfile: (values: ProfileType, setEditMode: (value: boolean) => void) => void
}

const ProfileInfo: React.FC<PropsType> = ({
                                            profile,
                                            status,
                                            updateStatus,
                                            isOwner,
                                            updatePhoto,
                                            saveProfile,
                                            error,
                                          }) => {
  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      updatePhoto(e.target.files[0])
    }
  }

  const activateEditMode = () => {
    setEditMode(true)
  }

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.descriptionBlock}>
          <img src={profile.photos.large || userPhoto} alt={'user avatar'} />
          {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
          <h5 className={styles.heading}>{profile.fullName}</h5>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
          {editMode ? (
            <ProfileDataForm
              profile={profile}
              error={error}
              setEditMode={setEditMode}
              saveProfile={saveProfile}
            />
          ) : (
            <ProfileData
              profile={profile}
              isOwner={isOwner}
              activateEditMode={activateEditMode}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo