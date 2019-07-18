import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink } from "react-router-dom"
import RouterView from "../router/routerview"
export default class list extends Component {
    render() {
        return (
            <div className="list">
            <div className="header">
                <NavLink to="/list/dian" className="active">点餐</NavLink>
               <NavLink to="/list/ping" className="active">评价</NavLink>
               <NavLink to="/list/shang" className="active">商家</NavLink>
            </div>
            <div className="main">
                <RouterView routes={this.props.children}/>
            </div>
            <div className="footer"></div>
    </div> 
        )
    }
}
