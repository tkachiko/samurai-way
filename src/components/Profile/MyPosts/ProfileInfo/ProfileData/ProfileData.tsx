import styles from './ProfileData.module.css'
import {ProfileType} from '../../../../../types/types'
import React from 'react'
import vk from './../../../../../assets/icons/vk.svg'
import github from './../../../../../assets/icons/github.svg'
import instagram from './../../../../../assets/icons/instagram.svg'
import facebook from './../../../../../assets/icons/facebook.svg'
import twitter from './../../../../../assets/icons/twitter.svg'
import website from './../../../../../assets/icons/globe-grid.svg'
import mainLink from './../../../../../assets/icons/globe-grid.svg'
import youtube from './../../../../../assets/icons/youtube.svg'

type PropsType = {
  profile: ProfileType
  isOwner: boolean
  activateEditMode: () => void
}

type SocialsType = {
  vk: string
  github: string
  instagram: string
  facebook: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export const ProfileData: React.FC<PropsType> = ({profile, isOwner, activateEditMode}) => {
  const contacts = Object.entries(profile.contacts).filter(
    ([name, address]) => [name, address],
  )

  const socials: SocialsType = {vk, github, instagram, facebook, twitter, website, youtube, mainLink}

  return (
    <div className={styles.profileInfo}>
      <div className={`${styles.contacts}`}>
        {contacts.length > 0 && (
          <>
            {contacts.map(
              ([name, address]) =>
                address && (
                  <div key={name} className={styles.contacts__socials}>
                    <a target="_blank" rel="noreferrer" href={address}>
                      <div className={styles.contactIcon}
                           style={{
                             backgroundImage: `url(${socials[name as keyof SocialsType]})`,
                             backgroundSize: 'cover',
                           }}></div>
                    </a>
                  </div>
                ),
            )}
          </>
        )}
      </div>
      {isOwner && (
        <div className={`${styles.buttonEdit}`}>
          <button onClick={activateEditMode}>Edit profile</button>
        </div>
      )}
      <div className={styles.contactsBlock}>
        <div className={styles.contactsAboutBlock}>
          <h6 className={`${styles.contactsAbout} ${styles.heading}`}>
            About me:&nbsp;
          </h6>
          <p className={`${styles.contactsAboutInfo}`}>{profile.aboutMe}</p>
        </div>
        <div className={`${styles.contactsJobBlock}`}>
          {profile.lookingForAJob && (
            <div>
              <h6 className={`${styles.heading}`}>Looking for a job: </h6>
              <div className={styles.lookingForAJob}></div>
            </div>
          )}
        </div>
        {profile.lookingForAJob && (
          <div className={`${styles.contactsDescription}`}>
            <h6
              className={`${styles.heading} ${styles.contactsJobDescription}`}
            >
              Description:{' '}
            </h6>
            <p>{profile.lookingForAJobDescription}</p>
          </div>
        )}
      </div>
    </div>
  )
}