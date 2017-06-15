import React from 'react'
import { Layout } from 'antd';

import HomePage from './pages/HomePage'
import MyFooter from './pages/MyFooter'
import MyHeader from './pages/MyHeader'

const App = () => {
  return (
    <Layout className="layout">
      <MyHeader />
      <HomePage />
      <MyFooter />
    </Layout>
  )
};

export default App;
