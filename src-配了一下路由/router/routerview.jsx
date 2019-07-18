import React, { Component } from 'react'
import {Switch,Route,Redirect} from "react-router-dom"
export default class routerview extends Component {
    render() {
        console.log(this.props)
        let {routes}=this.props
        console.log(routes)
        let redirectArr=routes.filter(item=>item.redirect)
        let RedirectArr=redirectArr.map((item,index)=>{
            return <Redirect key={index} to={item.redirect} from={item.path}/>
        })
        routes=routes.filter(item=>item.component)
        return (
            <Switch>
                {routes.map((item,index)=>{
                    return <Route key={index} path={item.path}
                        render={(props)=>{
                            return <item.component children={item.children} {...props}/>
                        }}
                    />
                })}
                {RedirectArr.length!==0&&RedirectArr}
            </Switch>
        )
    }
}
