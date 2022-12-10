import React, {ComponentType} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfileType} from '../../redux/profile-reducer';
import {RootStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
  userId: string
}

type MapStatePropsType = {
  profile: ProfileType
}

type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = '13491';
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    );
  }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
});

export default compose<ComponentType>(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  WithAuthRedirect,
)(ProfileContainer);