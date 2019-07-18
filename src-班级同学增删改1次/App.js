import React, { Component } from 'react'
import {BrowserRouter} from "react-router-dom"
import {routes} from "./route/route_config"
import RouterView from "./route/routerview"
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <RouterView routes={routes}/>
        </div>
      </BrowserRouter>
    )
  }
}
