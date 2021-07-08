
import './App.scss';
import React, { Component } from 'react'
import LandingPage from './components/LandingPage/LandingPage';
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
      <Route exact path = "/" component = {LandingPage}/>
      </Switch>
    </BrowserRouter>
 
  )
}

export default App


