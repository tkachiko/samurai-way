import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Route, withRouter} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/app-reducer'
import {RootStateType} from './redux/redux-store'
import {Preloader} from './components/common/Preloader/Preloader'

type MapStatePropsType = {
  initialized: boolean
}

type MapDispatchPropsType = {
  initializeApp: () => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class App extends React.Component<OwnPropsType> {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className={'appWrapper'}>
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path={'/dialogs'}
                 render={() => <DialogsContainer />}
          />
          <Route path={'/profile/:userId?'}
                 render={() => <ProfileContainer />}
          />
          <Route path={'/users'}
                 render={() => <UsersContainer />}
          />
          <Route path={'/login'}
                 render={() => <Login />}
          />
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App) as React.ComponentType
