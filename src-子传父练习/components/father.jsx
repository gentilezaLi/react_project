import React, { Component } from 'react'
import Child from "./child"
export default class father extends Component {
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    render() {
        return (
            <div>
                <Child onhandleChild={this.eve.bind(this)}/>
                <h1>{this.state.text}</h1>
            </div>
        )
    }
    eve(msg){
        console.log(msg)
        this.setState({
            text: msg
        })
    }
}
