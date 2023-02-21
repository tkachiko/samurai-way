import React from 'react'
import styles from './Header.module.css'
import {Avatar, Button, Col, Menu, Row} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import {useDispatch, useSelector} from 'react-redux'
import {selectCurrentUserLogin, selectIsAuth} from '../../redux/auth-selectors'
import {logout} from '../../redux/auth-reducer'
import {Link} from 'react-router-dom'

type PropsType = {}

export const AppHeader: React.FC<PropsType> = (props) => {
  const isAuth = useSelector(selectIsAuth)
  const login = useSelector(selectCurrentUserLogin)

  const dispatch = useDispatch()

  const logoutCallback = () => {
    dispatch(logout())
  }

  return (
    <div className={styles.header}>
      <Row>
        <Col span={18}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><Link to="/developers">Developers</Link></Menu.Item>
          </Menu>
        </Col>

        {isAuth
          ? <> <Col span={1}>
            <Avatar alt={login || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined />} />
          </Col>
            <Col span={5}>
              <Button onClick={logoutCallback}>Log out</Button>
            </Col>
          </>
          : <Col span={6}>
            <Button>
              <Link to={'/login'}>Login</Link>
            </Button>
          </Col>}

      </Row>
    </div>
  )
}
