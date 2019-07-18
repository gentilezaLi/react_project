import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "../css/see.css"
import RouterView from "../router/routerview" 
export default class see extends Component {
    render() {
        return (
            <div className="see">
                <div className="header">宝宝看</div>
                <div className="head">
                    <NavLink activeClassName="active" to="/see/er">儿歌</NavLink>
                    <NavLink activeClassName="active" to="/see/gu">故事</NavLink>
                    <NavLink activeClassName="active" to="/see/dong">动画片</NavLink>
                </div>
                <div className="con">
                    <RouterView routes={this.props.children}/>
                </div>
            </div>
        )
    }
}
