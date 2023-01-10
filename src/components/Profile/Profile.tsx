import React, {FC} from 'react'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './MyPosts/MyPostsContainer'
import {ProfileType} from '../../types/types'

export type ProfilePropsType = {
  profile: ProfileType
  status: string
  error: string | null
  isOwner: boolean
  updateStatus: (status: string) => void
  updatePhoto: (file: File) => void
  saveProfile: (values: ProfileType, setEditMode: (value: boolean) => void) => void
}

export const Profile: FC<ProfilePropsType> = ({
                                                profile,
                                                status,
                                                updateStatus,
                                                isOwner,
                                                updatePhoto,
                                                saveProfile,
                                                error,
                                              }) => {

  return (
    <div>
      <div>
        <ProfileInfo profile={profile}
                     status={status}
                     updateStatus={updateStatus}
                     isOwner={isOwner}
                     error={error}
                     updatePhoto={updatePhoto}
                     saveProfile={saveProfile}
        />
        <MyPostsContainer />
      </div>
    </div>
  )
}