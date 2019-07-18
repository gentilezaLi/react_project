import React, { Component } from 'react'
import "./css/anniu.css"
export default class anniu extends Component {
    render() {
        return (
            <div className="anniu">
                <span onClick={this.eve.bind(this)}>{this.props.ite}</span>
            </div>
        )
    }
    eve(){
        this.props.clickItem222(this.props.ite, this.props.ind)
    }
}
