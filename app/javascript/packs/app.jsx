import React from 'react'
import { Layout, Menu, Icon, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class App extends React.Component {
  state = {
    currentPage: 'home',
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <Menu
            selectedKeys={[this.state.currentPage]}
            mode="horizontal"
            style={{ lineHeight: '64px' }}
            theme="dark"
          >
            <Menu.Item key="home">
              <a href="/"><Icon type="home" /> Trang chủ</a>
            </Menu.Item>
            <Menu.Item key="about">
              <a href="/about">Về chúng tôi</a>
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          KVY Tech @2017
        </Footer>
      </Layout>
    );
  }
}
