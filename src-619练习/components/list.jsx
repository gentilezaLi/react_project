import React, { Component } from 'react'
import "../css/list.css"
import "../fonts/iconfont.css"
import {routes} from "../router/router_config"
import {BrowserRouter as Router,NavLink} from "react-router-dom"
import RouterViews from "../router/routerviews"
export default class list extends Component {
    render() {
        return (
            <Router>
            <div className="list">
                <div className="main">
                    <RouterViews routes={routes}/>
                    
                </div>
                <div className="footer">
                    <NavLink to="/shou" activeClassName="active">
                        <dl>
                            <dt className="iconfont icon-shouye"></dt>
                            <dd>首页</dd>
                        </dl>
                    </NavLink>
                    <NavLink to="/hui" activeClassName="active">
                        <dl>
                            <dt className="iconfont  icon-twitter"></dt>
                            <dd>会员</dd>
                        </dl>
                    </NavLink>
                    <NavLink to="/gou" activeClassName="active">
                        <dl>
                            <dt className="iconfont icon-gouwuche"></dt>
                            <dd>购物车</dd>
                        </dl>
                    </NavLink>
                    <NavLink to="/my" activeClassName="active">
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
