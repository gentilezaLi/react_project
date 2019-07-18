import React, { Component } from 'react'
import "./css/style.css"
import watcher from "./watcherInsTance"
export default class pinglun extends Component {
    render() {
        return (
            <div>
                <span onClick={()=>{
                    watcher.publish("ping",this.props.id)
                }}>评论</span>
                
            </div>
        )
    }
}
