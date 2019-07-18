import React, { Component } from 'react'
import {connect} from "react-redux"

class classRoomManger extends Component {
    render() {
        let {list}=this.props
        let {classRoom}=this.props.location.state
        return (
            <div>
                <h1>班级管理</h1>
                <hr/>
                {
                    list.map((item,index)=>{
                        return <li key={item.id}>{item.id+1}&nbsp;&nbsp;&nbsp;&nbsp;
                        {item.classRoom}&nbsp;&nbsp;&nbsp;&nbsp;
                        <span onClick={()=>{
                            this.props.delClassRoom({classRoom:item.classRoom})
                        }}>删除</span></li>
                    })
                }
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        list:state.allDataReducer
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        delClassRoom:(obj)=>{
            dispatch({type:"DEL_CLASSROOM",obj})
        }
    }
}
classRoomManger = connect(mapStateToProps, mapDispatchToProps)(classRoomManger)
export default classRoomManger;
