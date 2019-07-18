import React, { Component } from 'react'
import watcher from "./watcherInsTance"
export default class watcherInsTance extends Component {
    constructor(props){
        super(props);
        this.state={
            msg2:""
        }
    }

componentDidMount(){
    watcher.subscribe("father",this.handleSon.bind(this))
}
//方法
    handleSon(msg2){
        this.setState({
            msg2
        })
}
    render() {
        return (
            <div>
                爸爸：<button onClick={()=>{
                    //发布
                    watcher.publish("son","儿子，吃饭了")
                }}>呼叫</button>
                <h1>{this.state.msg2}</h1>
            </div>
        )
    }
}
