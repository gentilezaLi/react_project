import React, { Component } from 'react'
import Ite from "./ite"
import Right from "./right"
import "./left.css"
export default class left extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
   
    render() {
        return (
            <div className="left">
            <div className="lll">
                {
                        this.props.bank.map((item,index)=>{
                        return <Ite key={item.id}
                            {...item} onShow={this.props.onShow} range={this.props.range}
                        />
                    })
                } 
                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.bank)
    }
}
