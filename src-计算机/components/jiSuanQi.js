import React, { Component } from 'react'
import Show from "./show"
import Plane from "./plane"
import "./css/jiquanqi.css"
import calculate from "../script/calculate"
export default class jiSuanQi extends Component {
    constructor(props){
        super(props);
        this.state={
            total: null,
            next: null,
            operation: null,
        }
    }
    render() {
        return (
            <div className="jisuanqi">
                <Show msg={this.state.next || this.state.total||0}/>
                <Plane clickItem={this.eve.bind(this)}/>
            </div>
        )
    }
    eve(msg,i){
        this.setState(calculate(this.state,msg))
        // console.log(msg,i)
        // if (this.state.list[i] =="C"){
        //     this.setState({
        //         msg: ''
        //     })
        //     return;
        // }
        // if (this.state.list[i] == "←") {
        //     this.setState({
        //         msg: this.state.msg.slice(0,-1)
        //     })
        //     return;
        // }

        // this.setState({
        //     msg:this.state.msg.concat(msg)
        // })
    }
}
