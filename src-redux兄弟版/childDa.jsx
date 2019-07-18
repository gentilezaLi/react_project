import React, { Component } from 'react'
import store from "./store/srore"
export default class childDa extends Component {
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({})
        })
    }
    
    render() {
        console.log(store.getState().listReducer)
        return (
            <div>
                <button onClick={()=>{
                    store.dispatch({type:"ADD_USER",user:{title:"二弟你是抱来的",know:"嘻嘻"}})
                }}>对二弟说</button>
                <p>{store.getState().listReducer}</p>
            </div>
        )
    }
}
