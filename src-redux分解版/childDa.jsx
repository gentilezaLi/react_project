import React, { Component } from 'react'
import store from "./store/store"
export default class childDa extends Component {
    
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({})
        })
    }
    
    render() {
        return (
            <div>
                <p>{store.getState().listReducer}</p>
                <button onClick={()=>{
                    store.dispatch({type:"ADD_USER",user:{name:"张三",sex:"男"}})
                }}>发送给二弟</button>
            </div>
        )
    }
}
