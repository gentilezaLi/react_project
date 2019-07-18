import React, { Component } from 'react'
import Dialog from "./dialog"
export default class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: null,
            types: [
                { type: 1, name: "alert" },
                { type: 2, name: "confirm" },
                { type: 3, name: "prompt" }]
        }
    }
    render() {
        let { types} =this.state
        return (
            <div>
                {types.map((item,index)=>{
                    return <button key={index} onClick={this.eve.bind(this, item.type)}>{item.name}</button>
                })}
                <Dialog type={this.state.type}/>
            </div>
        )
    }
    eve(type){
        if(type==1){
            alert()
        }
        if (type == 2) {
            window.confirm()
        }
        if (type == 3) {
            prompt()
        }
        this.setState({
            type:type
        })
    }
}
