import React, { Component } from 'react'
import "./App.css"
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom"
import List from "./views/list"
import Detail from "./views/detail"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/list" component={List}/>
          <Route path="/detail" component={Detail}/>
          <Redirect to="/list"/>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
