import React, {ComponentType} from 'react'
import {Profile} from './Profile'
import {connect} from 'react-redux'
import {getStatus, getUserProfile, updatePhoto, updateStatus} from '../../redux/profile-reducer'
import {RootStateType} from '../../redux/redux-store'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect'
import {compose} from 'redux'
import {ProfileType} from '../../types/types'

type PathParamsType = {
  userId: string
}

type MapStatePropsType = {
  profile: ProfileType
  status: string
  authorizedUserId: null | number
  isAuth: boolean
}

type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void
  getStatus: (status: string) => void
  updateStatus: (status: string) => void
  updatePhoto: (file: File) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId && this.props.authorizedUserId !== null) {
      userId = this.props.authorizedUserId.toString()
      if (!userId) {
        this.props.history.push('login')
      }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<PropsType>, snapshot?: any) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile {...this.props}
               isOwner={!this.props.match.params.userId}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}
               updatePhoto={this.props.updatePhoto} />
    )
  }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
})

export default compose<ComponentType>(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, updatePhoto}),
  withRouter,
  WithAuthRedirect,
)(ProfileContainer)