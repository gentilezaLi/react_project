import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import RouteView from "../route/routeview"
import "../css/shop.css"
export default class shop extends Component {
    render() {
        return (
            <div className="shop">
                <div className="h_f">
                    <NavLink to="/list/shop/hello">哈喽</NavLink>
                    <NavLink to="/list/shop/wold">世界</NavLink>
                </div>
                <div className="h_c">
                    <RouteView routes={this.props.children}/>
                </div>
            </div>
        )
    }
}
