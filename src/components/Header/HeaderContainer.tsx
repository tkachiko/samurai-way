import React from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {logout} from '../../redux/auth-reducer'
import {RootStateType} from '../../redux/redux-store'

type MapStatePropsType = {
  login: string | null,
  isAuth: boolean
}

type MapDispatchPropsType = {
  logout: () => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<OwnPropsType> {

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})
export default connect(mapStateToProps, {logout})(HeaderContainer)
