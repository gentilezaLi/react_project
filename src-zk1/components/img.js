import React, { Component } from 'react'
import "./css/img.css"
export default class img extends Component {
    render() {
        return (
            <div className="tu">
               <img src={this.props.img} alt=""/>
            </div>
        )
    }
}
