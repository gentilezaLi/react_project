import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import RouterViews from "../router/routerviews"
import {routes} from "../router/router_config"
export class index extends Component {
    render() {
        return (
            <Router>
                <RouterViews routes={routes}/>
            </Router>
        )
    }
}

export default index
