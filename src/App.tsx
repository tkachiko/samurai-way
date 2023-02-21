import React, {FC, lazy} from 'react'
import './App.css'
import {Link, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import Login from './components/Login/Login'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/app-reducer'
import {RootStateType} from './redux/redux-store'
import {Preloader} from './components/common/Preloader/Preloader'
import {Layout, Menu} from 'antd'
import Sider from 'antd/es/layout/Sider'
import {withSuspense} from './hoc/withSuspense'
import {AppHeader} from './components/Header/AppHeader'

const {Header, Content, Footer} = Layout

const DialogsContainer = lazy(() => import ('./components/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import ('./components/Users/UsersContainer'))
const ProfileContainer = lazy(() => import ('./components/Profile/ProfileContainer'))

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedUsers = withSuspense(UsersContainer)

type MapStatePropsType = {
  initialized: boolean
}

type MapDispatchPropsType = {
  initializeApp: () => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

const App: FC<OwnPropsType> = (props) => {
  props.initializeApp()

  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <Layout>
      <AppHeader />
      <Content style={{padding: '0 50px'}}>
        <Layout className="site-layout-background" style={{padding: '24px 0'}}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              style={{height: '100%'}}
            >
              <Menu.Item key="1"><Link to={'/profile'} />Profile</Menu.Item>
              <Menu.Item key="2"><Link to={'/dialogs'} />Messages</Menu.Item>
              <Menu.Item key="5"><Link to={'/developers'} />Developers</Menu.Item>
            </Menu>
          </Sider>
          <Content style={{padding: '0 24px', minHeight: 280}}>

            <Switch>
              <Route exact path="/"
                     render={() => <Redirect to={'/profile'} />} />

              <Route path="/dialogs"
                     render={() => <SuspendedDialogs />} />

              <Route path="/profile/:userId?"
                     render={() => <SuspendedProfile />} />

              <Route path="/developers"
                     render={() => <SuspendedUsers />} />

              <Route path="/login"
                     render={() => <Login />} />

              {/*<Route path='/chat'*/}
              {/*       render={() => <SuspendedChatPage/>}/>*/}

              <Route path="*"
                     render={() => <div>404 NOT FOUND</div>} />
            </Switch>

          </Content>
        </Layout>
      </Content>
      <Footer style={{textAlign: 'center'}}>Samurai Social Network ©2022 Created by @tkachiko</Footer>
    </Layout>
  )
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App) as React.ComponentType
