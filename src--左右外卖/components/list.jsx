import React, { Component } from 'react'
import "./css/list.css"
import {BrowserRouter as Router,Route,Switch,Redirect,NavLink} from "react-router-dom"
import {routes} from "../router/route_config"
import "../fonts/iconfont.css"
export default class list extends Component {
    
    render() {
        return (
            <Router>
            <div className="list">
                <div className="header">WeX5 外卖</div>
                <div className="main">
                    {/* {dataList.map((item,index)=>{
                        return <Ite key={index} {...item}/> 
                    })} */}
                     <Switch>
                        {routes.map((item,index)=>{
                            return <Route 
                                key={index}
                                path={item.path}
                                component={item.component}
                            />
                        })}
                        <Redirect from="/" to="/menu"/>
                    </Switch>
                </div>
                <div className="footer">
                    <NavLink to="/menu" activeClassName="active">
                        <dl>
                            <dt className="iconfont icon-wodedingdan"></dt>
                            <dd>菜单</dd>
                        </dl>
                    </NavLink>
                    <NavLink to="/shopping">
                        <dl>
                            <dt className="iconfont icon-gouwuche"></dt>
                            <dd>购物车</dd>
                        </dl>
                    </NavLink>
                    <NavLink to="/order">
                        <dl>
                            <dt className="iconfont icon-gouwuche"></dt>
                            <dd>订单</dd>
                        </dl>
                    </NavLink>
                    <NavLink to="/my">
                         <dl>
                            <dt className="iconfont icon-gerenxinxi"></dt>
                            <dd>我的</dd>
                        </dl>
                    </NavLink>   
                </div>
            </div>
            </Router>
        )
    }
}
