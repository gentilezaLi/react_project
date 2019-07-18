import React, { Component } from 'react'
import "../components/list.css"
export default class list extends Component {
    render() {
        return (
            <div className={this.props.ind == this.props.count ? 'ite act' : 'ite'} onClick={this.props.dianji}>
                <img src={this.props.img} alt="" />
                <div className="mid">
                    <p>{this.props.name}</p>
                    <p>{this.props.text}</p>
                    <p>{this.props.time}</p>
                </div>
                
                <span className="btn"
                    className={this.props.is ? 'btn' : 'btn1'}
                    onClick={this.props.onClick}>{this.props.is ? '♡' : '❤'}</span>
            </div>
        )
    }
}
