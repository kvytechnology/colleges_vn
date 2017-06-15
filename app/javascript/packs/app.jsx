import React from 'react'
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MyFooter from './pages/MyFooter'
import MyHeader from './pages/MyHeader'

const App = () => {
  return (
    <Layout className="layout">
      <MyHeader />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/about" component={AboutPage}/>
        </Switch>
      </BrowserRouter>
      <MyFooter />
    </Layout>
  )
};

export default App;
