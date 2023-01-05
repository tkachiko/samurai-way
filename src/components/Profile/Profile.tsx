import React, {FC} from 'react'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './MyPosts/MyPostsContainer'
import {ProfileType} from '../../types/types'

export type ProfilePropsType = {
  profile: ProfileType
  status: string
  isOwner: boolean
  updateStatus: (status: string) => void
  updatePhoto: (file: File) => void
}

export const Profile: FC<ProfilePropsType> = ({profile, status, updateStatus, isOwner, updatePhoto}) => {

  return (
    <div>
      <div>
        <ProfileInfo profile={profile}
                     status={status}
                     updateStatus={updateStatus}
                     isOwner={isOwner}
                     updatePhoto={updatePhoto} />
        <MyPostsContainer />
      </div>
    </div>
  )
}