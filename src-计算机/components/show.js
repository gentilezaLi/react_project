import React, { Component } from 'react'
import "./css/show.css"
export default class show extends Component {
    render() {
        return (
            <div className="show">
                {this.props.msg}
            </div>
        )
    }
}
