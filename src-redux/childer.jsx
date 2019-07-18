import React, { Component } from 'react'
import store from "./store/store"
export default class childer extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    store.dispatch({type:"SENDDAGE",data:"大哥好"})
                }}> 发送消息</button>
                <button onClick={()=>{
                    store.dispatch({type:"JIA"})
                }}>+</button>
                <button onClick={()=>{
                    store.dispatch({type:"JIAN"})
                }}>-</button>
            </div>
        )
    }
}
