import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom"
import routes from "./route/route_config"
import RouterView from "./route/routeview"
import "./App.css"
export default class App extends Component {


    render() {
        return ( <
            div className = "app" >
            <
            BrowserRouter >
            <
            RouterView routes = { routes }
            /> <
            /BrowserRouter> <
            /div>
        )
    }
}