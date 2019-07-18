import React, { Component } from 'react'
import {Switch,Route,Redirect} from "react-router-dom"

export default class routerViews extends Component {
    render() {
        let {routes} =this.props

        //筛选出{path，redirect}
        let redirectArr =routes.filter(item=>item.redirect)
        //复制给新的数组
        let RedirectArr=redirectArr.map((item,index)=>{
            return <Redirect key={index} from={item.path} to={item.redirect}/>
        })
        //筛选出{path，component}  也就是非{path，redirect}
        //重新赋值给routes
        routes=routes.filter(item=>!item.redirect)

        return (
            <Switch>
                {routes.map((item,index)=>{
                    return  <Route key={index} path={item.path}
                        render={(props)=>{
                            return <item.component children={item.children}/>
                        }}
                    />
                })}
                
                {RedirectArr.length!==0&&RedirectArr}

                {/* component={item.component} */}
            </Switch>
        )
    }
}
