import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "../css/footer.css"
export default class footer extends Component {
    render() {
        return (
            <div className="foot">
                <NavLink to="/list">list</NavLink>
                <NavLink to="/answer">答题</NavLink>
                <NavLink to="/look">答题卡</NavLink>
                <NavLink to="/result">分数</NavLink>
            </div>
        )
    }
}
