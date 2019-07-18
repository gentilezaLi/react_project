import React, { Component } from 'react'
import "./css/plane.css"
import Anniu from "./anniu"
export default class plane extends Component {
    constructor(props){
        super(props);
        this.state={
            anNiuList: ["AC", "%", "←", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+","±",".","0","="]
        }
    }
    render() {
        let { anNiuList } = this.state
        return (
            <div className="plane">
                {anNiuList.map((item,index)=>{
                    return <Anniu key={index} ite={item} ind={index} clickItem222={this.props.clickItem}/>
                })}
            </div>
        )
    }
}
