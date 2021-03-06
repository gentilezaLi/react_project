import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
export default class routerview extends Component {
    render() {
        let { routes } = this.props
        let redirectArr = routes.filter(item => item.redirect)
        let RedirectArr = redirectArr.map((item, index) => {
            return <Redirect key={index}
                to={item.path}
                from={item.redirect}
            />
        })
        routes = routes.filter(item => item.component)
        return (<div>
            <Switch> {
                    routes.map((item, index) => {
                        return <Route key={index}
                            path={item.path}
                            render={
                                (props) => {
                                    return <item.component children={item.children} {...props} > </item.component>
                                }
                            }
                            />
                        })
            } {RedirectArr.length !== 0 && RedirectArr} 
            </Switch> 
            </div>
              )
        }
}