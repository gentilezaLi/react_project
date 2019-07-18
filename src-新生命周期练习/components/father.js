import React, { Component } from 'react'
import Son from "./son"
export default class father extends Component {
    constructor(props){
        super(props);
        this.state={
            mimi:"hello son"
        }
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.setState({
                    mimi:"hello s"
                })}>点击</button>
                <Son mimi={this.state.mimi}/>
            </div>
        )
    }
}
