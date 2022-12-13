import React from 'react';
import {FormDataType, LoginReduxForm} from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {RootStateType} from '../../redux/redux-store';

type LoginPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
}

type MapStatePropsType = {
  isAuth: boolean
}

type LoginOwnType = LoginPropsType & MapStatePropsType

export const Login: React.FC<LoginOwnType> = (props) => {
  const onSubmit = (formData: FormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={`/profile`}/>;
  }

  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </>
  );
};

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, {login})(Login);