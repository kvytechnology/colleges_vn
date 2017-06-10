import React from 'react'
import { Layout } from 'antd'
const { Footer } = Layout;

export default class MyFooter extends React.Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        KVY Tech @2017
      </Footer>
    );
  }
}
