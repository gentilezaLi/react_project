import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "../css/list.css"
import RouteView from "../route/routeview"
import { routes } from "../route/route_config"

export default class list extends Component {
    render() {
        return (
            <div className="list">
                <div className="main">
                  <RouteView routes={routes}/>
                </div>
                <div className="footer">
                    <NavLink to="/shou" activeClassName="active">首页</NavLink>
                    <NavLink to="/fen">分类</NavLink>
                    <NavLink to="/gou">购物车</NavLink>
                    <NavLink to="/my">我的</NavLink>
                </div>
            </div>
        )
    }
}
