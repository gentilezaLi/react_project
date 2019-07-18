import React, { Component } from 'react'
import "./css/style.css"
import watcher from "./watcherInit"
export default class pinglun extends Component {
    render() {
        return (
            <div className="style">
                <p onClick={()=>{
                    watcher.publish("ping",this.props.id)
                }}>评论</p>
            </div>
        )
    }
}
