import React, { Component } from 'react'
import "./App.css"
import {BrowserRouter} from "react-router-dom"
import RouteView from "./route/routeview"
import {routes} from "./route/route_config"
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app">
        <RouteView routes={routes}/>
      </div>
      </BrowserRouter>
    )
  }
}
