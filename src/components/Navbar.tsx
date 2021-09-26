import { Layout, Menu, Row } from 'antd'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { Routes } from '../routes'

const NavBar: FC = () => {
  const history = useHistory()

  return (
    <Layout.Header>
      <Row justify='end'>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key="1" onClick={() => history.push(Routes.LOGIN)}>Login</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
        </Menu>
      </Row>
    </Layout.Header>
  )
}

export default NavBar
