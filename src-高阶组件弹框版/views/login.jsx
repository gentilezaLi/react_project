import React, { Component } from 'react'

export default class login extends Component {
    constructor(props){
        super(props);
        this.state={
            val:""
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={(e)=>{
                    this.setState({
                        val:e.target.value
                    })
                }}/><br/>
                <button onClick={()=>{
                   localStorage.setItem("token",this.state.val)
                }}>登录</button>
            </div>
        )
    }
}
