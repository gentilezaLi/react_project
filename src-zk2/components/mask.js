import React, { Component } from 'react'
import Box from "./box"
export default class mask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type:{
                hs:1,
                num:50
            }
        }
    }
   
    onMove(num){
        let newtype=this.state.type
        newtype.num=num
        this.setState({
            type:newtype
        })
    }
    
    render() {
        let {type}=this.state
        return (
            <div>
                <Box {...type} onMove={this.onMove.bind(this)}
                />
            </div>
        )
    }
}
