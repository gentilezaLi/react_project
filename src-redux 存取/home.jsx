import React, { Component } from 'react'
import {connect} from "react-redux"
export class home extends Component {
    constructor(props){
        super(props)
        this.state={
            val:''
        }
    }
    render() {
        console.log(this.props)
        console.log(this.props.list)
        return (
            <div>
                <input type="text" value={this.state.value} onChange={(e)=>{
                    this.setState({
                        val:e.target.value
                    })
                }}/>
                <button onClick={()=>{
                    this.props.saveList(this.state.val)
                }}>添加</button>
                {this.props.list.map((item,index)=>{
                    return <p key={index} style={{background:"rgba(123,"+index+"23,123)"}}>{item}</p>
                })}
            </div>
        )
    }
}
let mapStateToProps=(state)=>{
    return {
        list:state.reducer1
    }
}
let mapDiapatchToProps=(dispatch)=>{
    return {
        saveList:(msg)=>{
            dispatch({type:"ADD_LIST",data:msg})
        }
    }
}
home=connect(mapStateToProps,mapDiapatchToProps)(home)
export default home
