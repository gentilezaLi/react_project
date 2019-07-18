import React, { Component } from 'react'
// import {routes} from "../router/router_config"
import {Route,Switch,NavLink,Redirect}from "react-router-dom"
import RouterView from "../router/routerViews"

export default class re extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                <NavLink to="/ke/men">热门 </NavLink>
                <NavLink to="/ke/si"> 热死了</NavLink>

                <RouterView routes={this.props.children}/>
                {/* <Switch>
                    {
                        routes[1].children.map((item,index)=>{
                            return <Route key={index} path={item.path} component={item.component}/>
                        })
                    }
                    <Redirect to="/ke/si"/>
                </Switch> */}
            </div>
        )
    }
}
