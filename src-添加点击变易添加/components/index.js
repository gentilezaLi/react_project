import React, { Component } from 'react'
import "../App.css"
export default class index extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="ite">
                <img src={this.props.img}  alt=""/>
                <span>{this.props.name}</span>
                <span className="btn"
                    className={this.props.isLardear?'btn':'btn1'}
                  onClick={this.props.onClick}>{this.props.isLardear?'添加':'已添加'}</span>
            </div>
        )
    }
   
}
