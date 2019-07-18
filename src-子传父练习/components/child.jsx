import React, { Component } from 'react'

export default class child extends Component {
    constructor(props){
        super(props);
        this.state={
            msg:"好吧！你敢。"
        }
    }
    render() {
        return (
            <div>
                <hr/>
                <button onClick={() => this.props.onhandleChild(this.state.msg)}>你敢点我吗？</button>
                <hr/>
            </div>
        )
    }
    // eveve(){
    //     this.props.onhandleChild(this.state.msg)
    // }
}
