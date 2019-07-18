import React, { Component } from 'react'
import store from "./store/srore"

export default class childEr extends Component {
    constructor(props){
        super(props);
        this.state={
            resucer:{}
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                resucer:store.getState()
            })
        })
    }
    render() {
        let {resucer}=this.state
        console.log(resucer)
        return (
            <div>
                {resucer.userReducer&&
                <div>
                    <p>{resucer.userReducer.title}</p>
                    <p>{resucer.userReducer.know}</p>
                </div>
                }
                <button onClick={()=>{
                    store.dispatch({type:"LIST_USER",list:[1,2,3]})
                }}>对大哥说</button>
            </div>
        )
    }
}
