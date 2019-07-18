import React, { Component } from 'react'
import {BrowserRouter as Router,NavLink} from "react-router-dom"
import "../css/list.css"
import "../fonts/iconfont.css"
import RouterView from "../router/routerview" 
import {routes} from "../router/router_config"
export default class list extends Component {
    render() {
        return (
            <Router>
            <div className="list"> 
                <div className="main">
                    <RouterView routes={routes}/>
                </div>
                <div className="footer">
                    <NavLink activeClassName="active" to="/see">
                        <dl>
                            <dt className="iconfont icon-pinterest"></dt>
                            <dd>宝宝看</dd>
                        </dl>
                    </NavLink>
                    <NavLink activeClassName="active" to="/listen">
                        <dl>
                            <dt className="iconfont icon-dribbble"></dt>
                            <dd>宝宝听</dd>
                        </dl>
                    </NavLink>
                    <NavLink activeClassName="active" to="/my">
                        <dl>
                            <dt className="iconfont icon-wode"></dt>
                            <dd>我的</dd>
                        </dl>
                    </NavLink>
                </div>
            </div>
            </Router>
        )
    }
}
