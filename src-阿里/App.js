import React, { Component } from 'react'
import "./App.css"
import { routes } from "./route/route_config"
import RouterView from "./route/routeview"

import { BrowserRouter as Router } from "react-router-dom"
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <RouterView routes={routes} />
        </div>
      </Router>
    )
  }
}
