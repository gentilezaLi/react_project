import React, { Component } from 'react'
import "./ite.css"    
export default class ite extends Component {
    render() {
        return (
            <div className={this.props.ind==this.props.code?"ite act":"ite"} onClick={this.props.dianji}>
                <p>姓名：{this.props.name}</p>
                <p>星级：{this.props.star}</p>
            </div>
        )
    }
}
