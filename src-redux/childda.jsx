import React, { Component } from 'react'
import store from "./store/store"
export default class childda extends Component {
    constructor(props){
        super(props);
        this.state={
            hello:'',
            count:0
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.hello}</h1>
                <b>{this.state.count}</b>
            </div>
        )
    }
    componentDidMount() {
        //订阅
        store.subscribe(()=>{
            this.setState({
                hello:store.getState(),
                count:store.getState()
            })
        })
    }
    
}
