import React, { Component } from 'react'
import "./App.css"
import { BrowserRouter as Router, NavLink } from "react-router-dom"
import routes from "./router/router_config"
import RouterView from "./router/routerview"



export default class App extends Component {
    render() {
        return ( <Router>
          <div className="app">
                   <RouterView routes={routes}/>
          </div> 
       </Router>
        )
    }
}