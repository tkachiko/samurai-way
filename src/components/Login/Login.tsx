import React from 'react'
import {FormDataType, LoginForm} from './LoginForm'
import {connect} from 'react-redux'
import {login} from '../../redux/auth-reducer'
import {Redirect} from 'react-router-dom'
import {RootStateType} from '../../redux/redux-store'

type LoginPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
}

type MapStatePropsType = {
  isAuth: boolean
  errorMessage: null | string
}

type LoginOwnType = LoginPropsType & MapStatePropsType

export const Login: React.FC<LoginOwnType> = (props) => {
  const onSubmit = (data: FormDataType) => {
    props.login(data.email, data.password, data.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={`/profile`} />
  }

  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} errorMessage={props.errorMessage} />
    </>
  )
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  errorMessage: state.auth.error,
})


export default connect(mapStateToProps, {login})(Login)