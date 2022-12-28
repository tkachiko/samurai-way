import React, {FC} from 'react'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './MyPosts/MyPostsContainer'
import {ProfileType} from '../../redux/profile-reducer'

export type ProfilePropsType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
}

export const Profile: FC<ProfilePropsType> = ({profile, status, updateStatus}) => {

  return (
    <div>
      <div>
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
        <MyPostsContainer />
      </div>
    </div>
  )
}