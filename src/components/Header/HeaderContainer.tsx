import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {getAuthUserData} from '../../redux/auth-reducer';
import {RootStateType} from '../../redux/redux-store';

type MapStatePropsType = {
  login: string | null,
  isAuth: boolean
}

type MapDispatchPropsType = {
  getAuthUserData: () => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<OwnPropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <Header {...this.props}/>
    );
  }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
