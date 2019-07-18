import React, { Component } from 'react'
import {connect} from "react-redux"

class result extends Component {
    render() {
        console.log(this.props.list,"fenshu")
        return (
            <div>
                结果
                <p>分数{this.props.list.length}</p>
            </div>
        )
    }
}
let mapStateToProps=(state)=>{
    return{
        list:state.fenshuReducer
    }
}

result=connect(mapStateToProps,)(result)
export default result;