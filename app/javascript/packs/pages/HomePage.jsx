import React from 'react'
import { Layout, Breadcrumb } from 'antd'

const { Content } = Layout;

export default class HomePage extends React.Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item>Trường nổi bật</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          Noi dung se o day...
        </div>
      </Content>
    );
  }
}
