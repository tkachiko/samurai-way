import React, {FC, lazy, Suspense} from 'react'
import './App.css'
import {Navbar} from './components/Navbar/Navbar'
import {Redirect, Route, withRouter} from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/app-reducer'
import {RootStateType} from './redux/redux-store'
import {Preloader} from './components/common/Preloader/Preloader'
import {Layout, Menu} from 'antd'

const {Header, Content, Footer} = Layout

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

const App: FC<OwnPropsType> = (props) => {
  props.initializeApp()

  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          // items={new Array(15).fill(null).map((_, index) => {
          //   const key = index + 1;
          //   return {
          //     key,
          //     label: `nav ${key}`,
          //   };
          // })}

        />
      </Header>
      <Content style={{padding: '0 50px'}}>
        {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
        {/*  <Breadcrumb.Item>Profile</Breadcrumb.Item>*/}
        {/*  <Breadcrumb.Item>Messages</Breadcrumb.Item>*/}
        {/*  <Breadcrumb.Item>Users</Breadcrumb.Item>*/}
        {/*</Breadcrumb>*/}
        <div className="site-layout-content">
          <div className={'appWrapper'}>
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
              <Suspense fallback={<Preloader />}>
                <Route path={'/'}
                       render={() => <Redirect to={'/profile'} />} />
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer />} />
                <Route path={'/profile/:userId?'}
                       render={() => <ProfileContainer />} />
                <Route path={'/users'}
                       render={() => <UsersContainer />} />
                <Route path={'/login'}
                       render={() => <Login />} />
                {/*<Route path={'*'}*/}
                {/*       render={() => <div>404 NOT FOUND</div>} />*/}
              </Suspense>
            </div>
          </div>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>github @tkachiko ©2023</Footer>
    </Layout>
  )
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App) as React.ComponentType
