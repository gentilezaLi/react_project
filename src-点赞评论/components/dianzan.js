import React, { Component } from 'react'
import "./css/style.css"
import watcher from "./watcherInit"
export default class dianzan extends Component {
    render() {
        return (
            <div className="style">
                <p onClick={()=>{
                    watcher.publish("zan",this.props.id)       
                }}>点赞{this.props.zan?this.props.zan:''}</p>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.zan)
    }
    
    
}
