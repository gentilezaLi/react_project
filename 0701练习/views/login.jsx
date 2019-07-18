import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
class login extends Component {
    constructor(props){
        super(props)
        this.state={
            val:""
        }
    }
    
    
    render() {
        return (
            <div>
               <input type="text" value={this.state.val}
                onChange={(e)=>{
                    this.setState({
                        val:e.target.value
                    })
                }}
               /> <br/>
               <button onClick={()=>{
                   localStorage.setItem("token",this.state.val)
                   this.props.history.push("/list")
               }}>登录</button>
            </div>
        )
    }
}
login=withRouter(login)
export default login;
