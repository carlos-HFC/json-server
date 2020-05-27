import React from 'react';
import { HashRouter } from 'react-router-dom'

import Logo from '../components/templates/logo'
import Nav from '../components/templates/nav'
import Routes from './routes'
import Footer from '../components/templates/footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './app.css'

export default () => (
   <HashRouter>
      <div className="app">
         <Logo />
         <Nav />
         <Routes />
         <Footer />
      </div>
   </HashRouter>
)