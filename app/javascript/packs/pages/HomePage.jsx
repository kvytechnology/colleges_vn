import React, { Component } from 'react'
import { Layout } from 'antd'
const { Content } = Layout;

export default class HomePage extends Component {
  render() {
    return (
      <Content>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          Noi dung se o day...
        </div>
      </Content>
    );
  }
}
