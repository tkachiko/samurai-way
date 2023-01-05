import React, {lazy, Suspense} from 'react'
import './App.css'
import {Navbar} from './components/Navbar/Navbar'
import {Route, withRouter} from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/app-reducer'
import {RootStateType} from './redux/redux-store'
import {Preloader} from './components/common/Preloader/Preloader'

const DialogsContainer = lazy(() => import ('./components/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import ('./components/Users/UsersContainer'))
const ProfileContainer = lazy(() => import ('./components/Profile/ProfileContainer'))

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
          <Suspense fallback={<Preloader />}>
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
          </Suspense>
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
