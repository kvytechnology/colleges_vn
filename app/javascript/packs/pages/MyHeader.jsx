import React from 'react'
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MyHeader extends React.Component {
  state = {
    currentPage: 'home',
  }
  
  render() {
    return (
      <Menu
        selectedKeys={[this.state.currentPage]}
        mode="horizontal"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="home">
          <a href="/"><Icon type="home" /> Trang chủ</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a href="/about">Về chúng tôi</a>
        </Menu.Item>
      </Menu>
    );
  }
}
