import React, { Component } from 'react'
import { connect} from "react-redux"

 class classroommanager extends Component {
     
    render() {
        console.log(this.props)
        let {list}=this.props
        console.log(list)
        return (
            <div>
                <h1> 班级管理</h1>
                <div style={{fontSize:"50px"}}>
                    {list.map((item,index)=>{
                        return <div key={index} onClick={()=>{
                            let ind=list.findIndex(it=>it.classRoom===item.classRoom)
                            console.log(item)
                            list.splice(ind,1)
                            alert("删除成功")
                            this.props.history.replace("/classroommanager")
                        }}>{item.classRoom}</div>
                    })}
                </div>
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
    return {
        addstudent:(list)=>{
            dispatch({type:"ADDSTUDENT",list})
        }
    }
}
classroommanager=connect(mapStateToProps,mapDispatchToProps)(classroommanager)
export default classroommanager;
