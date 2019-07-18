import React, { Component } from 'react'
import Small from "./small"
import "./css/title.css"
export default class title extends Component {
    render() {
        return (
            <div>
                <h3 className="categoryName">{this.props.categoryName}</h3>
                {this.props.spuList.map((item,index)=>{
                    return <Small key={index} {...item}/>
                })}
            </div>
        )
    }
}
