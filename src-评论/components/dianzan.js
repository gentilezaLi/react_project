import React, { Component } from 'react'
import "./css/style.css"
import watcher from "./watcherInsTance"
export default class dianzan extends Component {
    render() {
        return (
            <div>
                <span onClick={()=>{
                    watcher.publish("zan",this.props.id)
                }}>点赞{this.props.zan ? this.props.zan:''}</span>
            </div>
        )
    }
}
