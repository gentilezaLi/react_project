import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import List from "./views/list"
import Login from "./views/login"
export default class App extends Component {
  render() {
    return (
       <Router>
      <div className="app">
        <Switch>
          <Route path="/list" component={List}/>
          <Route path="/login" component={Login}/>
          <Redirect from="/" to="/list"/>
        </Switch>
      </div>
      </Router>
    )
  }
}
