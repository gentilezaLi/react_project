import React, { Component } from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import {routes} from "./route/router_config"
import RouterView from "./route/routeview"
import Footer from "./components/footer"
import "./App.css"
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="main">
            <RouterView routes={routes}/>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
      </Router>
    )
  }
}
