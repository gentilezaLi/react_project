import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import RouterView from "../router/routerviews"
export default class shou extends Component {
    render() {
        return (
            <div className="shouye">
                <div className="tou">
                  <NavLink to="/shou/re" activeClassName="active">热卖</NavLink>
                <NavLink to="/shou/huo" activeClassName="active">热卖</NavLink>
                <NavLink to="/shou/shui" activeClassName="active">热卖</NavLink>
                <NavLink to="/shou/shu" activeClassName="active">热卖</NavLink>  
                </div>
                <div className="shen">
                    <RouterView routes={this.props.children}/>
                </div>
                
            </div>
        )
    }
}
