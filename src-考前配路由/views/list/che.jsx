import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import RouterView from "../../route/routeview"
import "../../css/che.css"
export default class che extends Component {
    render() {
        return (
            <div className="che">
                <div> che</div>
                <div>
                    <NavLink to="/list/che/hello">hello</NavLink>
                    <NavLink to="/list/che/world">world</NavLink>
                </div>
                <div>
                    <RouterView routes={this.props.children}/>
                </div>
            </div>
        )
    }
}
