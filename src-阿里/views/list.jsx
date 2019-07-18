import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import RouteView from "../route/routeview"
import "../css/list.css"
import "../fonts/iconfont.css"
export default class list extends Component {
    render() {
        return (
            <div className="list"> 
                <div className="main">
                   <RouteView routes={this.props.children}/>
                </div>
                <div className="footer">
                    <NavLink to="/list/home">
                        <dl>
                            <dt className="iconfont icon-shouye"></dt>
                            <dd>首页</dd>
                        </dl>
                    </NavLink>
                    <NavLink to="/list/hang">
                        <dl>
                            <dt className="iconfont icon-baidu"></dt>
                            <dd>行情</dd>
                        </dl>
                    </NavLink>
                    <NavLink to="/list/zi">
                        <dl>
                            <dt className="iconfont icon-wode"></dt>
                            <dd>自选</dd>
                        </dl>
                    </NavLink>
                    <NavLink to="/list/jiao">
                        <dl>
                            <dt className="iconfont icon-dizhi-01"></dt>
                            <dd>交易</dd>
                        </dl>
                    </NavLink>
                    <NavLink to="/list/xun">
                        <dl>
                            <dt className="iconfont icon-zixun"></dt>
                            <dd>咨询</dd>
                        </dl>
                    </NavLink>
                </div>
            </div>
        )
    }
}
