import React, { Component } from 'react'
import {routes} from "../router/router_config"
import {BrowserRouter as Router,Route,Switch,NavLink,Redirect}from "react-router-dom"
import RouterView from "../router/routerViews"
export default class home extends Component {
    render() {
        return (
            <Router>
                <NavLink to="/re">热 </NavLink>
                <NavLink to="/ke"> 课 </NavLink>
                <NavLink to="/xue">学 </NavLink>

                <RouterView routes={routes}/>
                {/* <Switch>
                    {routes.map((item,index)=>{
                        return <Route key={index} path={item.path} component={item.component}/>
                    })}
                   <Redirect to="/ke"/>
                </Switch> */}
            </Router>
        )
    }
}
