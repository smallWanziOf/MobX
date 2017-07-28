import React, { Component } from 'react'
import { Link, Route } from 'react-flex-router'
// other import
 
export default class User extends Component {
  render(){
    return (
      <div>
        <ul>
          <Link to='/info'>Info</Link>
          <Link to='/edit'>Edit</Link>
        </ul>
 
        <div>
          <Route index component={ UserInfo } path='/info'/>
          <Route component={ UserInfoEdit } path='/edit'/>
        </div>
      </div>
    )
  }
}