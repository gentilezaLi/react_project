import React, { Component } from 'react'
// import HocComponent from "./hocComponent"
import NewCom from "./newCom"
export class child extends Component {
    render() {
        
        return (
            <div>
                儿子
            </div>
        )
    }
}
// child=HocComponent(child,"pink")
child=NewCom()(child)

export default child
