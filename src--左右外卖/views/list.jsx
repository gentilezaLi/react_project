import React, { Component } from 'react'
import {BrowserRouter as Router,NavLink} from "react-router-dom"
import RouterView from "../router/routerview"
import {routes} from "../router/router_config"
import "../css/list.css"
import "../fonts/iconfont.css"
export class list extends Component {
    render() {

        return (
            <Router>
            <div className="list"> 
                <div className="header">
                    <NavLink to="/diancan" activeClassName="active">点餐</NavLink>
                    <NavLink to="/pingjia" activeClassName="active">评价</NavLink>
                    <NavLink to="/shangjia" activeClassName="active">商家</NavLink>
                </div>
                <div className="main">
                    <RouterView routes={routes}/>
                </div>
                <div className="footer">
                    <div><p><span className="iconfont icon-gouwuche"></span><b>22</b></p></div>
                    <div>
                        <p>￥410</p>
                        <p>配送费$6.5</p>
                    </div>
                    <div>去结算</div>
                </div>
            </div>
            </Router>
        )
    }
}

export default list
