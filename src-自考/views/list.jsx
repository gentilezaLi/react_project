import React, { Component } from 'react'
import {allData} from "../api/index"
import {connect} from "react-redux"
class list extends Component {
    componentDidMount() {
        this.props.saveAllDate(allData)
    }
    render() {
        return (
            <div>
               {this.props.list.map((item,index)=>{
                   return <p key={index}>{item.title}</p>
               })}
                <span style={{background:"skyblue"}}
                 onClick={()=>{
                    this.props.history.push("/answer/0")
                }}>开始做题</span>
            </div>
        )
    }
}
let mapStateToProps=(state)=>{
    return{
        list:state.alldataReducer
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        saveAllDate:(fn)=>{
            dispatch(fn)
        }
    }
}
list=connect(mapStateToProps,mapDispatchToProps)(list)
export default list;
