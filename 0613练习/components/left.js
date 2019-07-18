import React, { Component } from 'react'
import "./left.css"
export default class left extends Component {
    render() {
        return (
            <div className="left">
                <p className={this.props.code==this.props.ind?"ite act":"ite"}
                    onClick={this.props.dianji}
                >{this.props.item}</p>
            </div>
        )
    }
}
