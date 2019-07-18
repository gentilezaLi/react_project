import React, { Component } from 'react'
import Child from "./child"
export default class father extends Component {
    constructor(props){
        super(props);
        this.state={
            userId:1
        }
        console.log("constructor")
    }
    render() {
        console.log("父组件render")
        return (
            
            <div>
                <button onClick={()=>{
                    this.setState({
                        userId:1
                    })
                }}>父组件 点击</button>
                <Child userId={this.state.userId}/>
            </div>
        )
    }
    componentDidMount(){
        console.log("componentDidMount")

    }
}
