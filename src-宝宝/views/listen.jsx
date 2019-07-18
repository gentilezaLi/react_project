import React, { Component } from 'react'
import "../css/listen.css"
import {NavLink} from "react-router-dom"
import RouterView from "../router/routerview" 


export default class see extends Component {
    render() {
        return (
            <div className="listen">
                <div className="header">宝宝听</div>
                <div className="tou">
                    <span>
                     <NavLink activeClassName="active" to="/listen/erge">儿歌</NavLink>
                    <NavLink activeClassName="active" to="/listen/gushi">故事</NavLink>   
                    </span>
                </div>
                <div className="content">
                    <RouterView routes={this.props.children}/>
                </div>
            </div>
        )
    }
}
