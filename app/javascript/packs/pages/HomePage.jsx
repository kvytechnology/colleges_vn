import React, { Component } from 'react'
import { Layout } from 'antd'
const { Content } = Layout;

export default class HomePage extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          Noi dung se o day...
        </div>
      </Content>
    );
  }
}
