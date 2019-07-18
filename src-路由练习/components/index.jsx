import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom"
import {routes} from "../router/router_config"
export default class index extends Component {
    render() {
        return (
            <Router>
                <Link to="/home">主页</Link>
                <Link to="/main">内容</Link>
                <Link to="/me">我的</Link>
                <Switch>
                    {routes.map((item,index)=>{
                        return <Route key={index} path={item.path} component={item.component}/>
                    })}
                    <Redirect from="/" to="/home"/>
                </Switch>
            </Router>
        )
    }
}
