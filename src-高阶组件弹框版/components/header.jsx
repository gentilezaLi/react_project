import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
export default class header extends Component {
    render() {
        return (
            <div>
                <NavLink to={{pathname:"/home",state:"Home"}}>Home</NavLink>
                <NavLink to={{pathname:"/page",state:"Page"}}>Page</NavLink>
                <NavLink to={{pathname:"/my",state:"My"}}>My</NavLink>
            </div>
        )
    }
}
