import React, { Component } from 'react'
import watcher from "./watcherInsTance"
export default class watcherInsTance extends Component {
    constructor(props){
        super(props);
        this.state={
            msg:""
        }
    }
    componentDidMount(){  
        watcher.subscribe("son",this.handleMsg.bind(this))
    }
    //方法handleMsg
    handleMsg(msg1){
        this.setState({
            msg:msg1
        })
    }

    render() {
        return (
            <div>
                儿子：{this.state.msg}
                <button onClick={()=>{
                    watcher.publish("father","收到")
                }}>点击</button>
            </div>
        )
    }
}
