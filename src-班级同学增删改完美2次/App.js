import React, { Component } from 'react'
import { routes } from "./route/route_config"
import RouteView from "./route/routeview"
export default class App extends Component {
    render() {
        return ( <
            div >
            <
            RouteView routes = { routes }
            /> <
            /div>
        )
    }
}