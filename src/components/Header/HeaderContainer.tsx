import React from 'react';
import {Header} from './Header';
import {default as axios} from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {RootStateType} from '../../redux/redux-store';

type MapStatePropsType = {
  login: string | null,
  isAuth: boolean
}

type MapDispatchPropsType = {
  setAuthUserDataAC: (email: string, id: number, login: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<OwnPropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then((response: any) => {
        if (response.data.resultCode === 0) {
          const {email, id, login} = response.data.data;
          this.props.setAuthUserDataAC(email, id, login);
        }
      });
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
export default connect(mapStateToProps, {setAuthUserDataAC: setAuthUserData})(HeaderContainer);
