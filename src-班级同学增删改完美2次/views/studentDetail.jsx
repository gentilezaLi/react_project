import React, { Component } from 'react'
import {Button} from "antd"
import { connect } from "react-redux"

 class studentDetail extends Component {
    state={
        name:this.props.location.state.item.name,
        classRoom:this.props.location.state.item.classRoom
    }
    render() {
        let {item}=this.props.location.state
        let {name,classRoom}=this.state
       
        return (
            <div>
                <h1>学生详情</h1>
                <hr/>
                <div>学生班级：<input type="text" value={this.state.classRoom} onChange={(e)=>{
                    this.setState({
                        classRoom:e.target.value
                    })
                }}/></div>
                <div>学生姓名：<input type="text" value={this.state.name} onChange={(e)=>{
                    this.setState({
                        name:e.target.value
                    })
                }}/></div>
                <Button type="danger" onClick={()=>{
                    this.props.saveDelStudent({...item})
                    this.props.history.go(-1)
                }}>删除学生</Button>
                <Button type="dashed" onClick={()=>{
                    if(classRoom===item.classRoom){
                        this.props.saveChange("CHANGE_NAME",{name,classRoom,id:item.id})
                    }else{
                        this.props.saveChange("CHANGE_NAME_CLASSROOM",{name,newClassRoom:classRoom,classRoom:item.classRoom,id:item.id})
                    }
                    this.props.history.replace("/classRoomManger",{classRoom:item.classRoom})
                }}>修改姓名和班级</Button>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        list: state.allDataReducer
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        saveDelStudent: (obj) => {
            dispatch({ type: "DEL_STUDENT", obj })
        },
        saveChange:(type,obj)=>{
            dispatch({type,obj})
        }
    }
}
studentDetail = connect(mapStateToProps, mapDispatchToProps)(studentDetail)
export default studentDetail;
