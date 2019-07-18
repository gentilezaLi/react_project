import React, { Component } from 'react'
import "../App.css"
export default class List extends Component {
    render() {
        return (
            <div className="lianxi">
                <img src={this.props.img} alt=""/>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
