import React, { Component } from 'react'
import Header from "../components/header"
export default class home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <button onClick={()=>{
                    this.props.history.push("/pageDetail")
                }}>page跳转</button>
            </div>
        )
    }
}
