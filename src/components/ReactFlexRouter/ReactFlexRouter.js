import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-flex-router'
import User from './User'
// other import
 
export default class App extends Component {
  render(){
    return (
      <HashRouter>
        <div>
 
          <Route lock component={ Home } path="/"/>
 
          <Route component={ Products } path="/products" enterFilter={ loginFilter }>
            <Route index component={Enterprise} path="/ep"/>
            <Route miss component={ NotFound }/>
            <Route component={ Detail } path="/item/:id" time={new Date().toLocaleString()}/>
          </Route>
 
          <Route muiltiple component={ User }  path="/user"/>
 
        </div>
      </HashRouter>
    )
  }
}