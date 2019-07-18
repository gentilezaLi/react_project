import React, { Component } from 'react'
import {Switch,Route,Redirect} from "react-router-dom"
export default class routerviews extends Component {
    
    render() {
        let {routes} =this.props
        let redirectArr=routes.filter(item=>item.redirect)
        let RedirectArr=redirectArr.map((item,index)=>{
            return <Redirect from={item.path} to={item.redirect} key={index}/>
        })
        routes=routes.filter(item=>item.component)
        return (
            <div>
                <Switch>
                    {routes.map((item,index)=>{
                        return <Route key={index} path={item.path}
                            render={(props)=>{
                                return <item.component children={item.children}></item.component>
                            }}
                        />
                    })}
                    {RedirectArr.length!==0&&RedirectArr}
                </Switch>
            </div>
        )
    }
}
