import React, { Component } from 'react'
import {Icon,Button} from "antd"
import { connect} from "react-redux"

 class classroomdetail extends Component {
     constructor(props){
         super(props)
         this.state={
            sel_val:"",
         }
     }
    render() {
        let {room}=this.props.location.state
        let list=this.props.list
        let ind=list.findIndex(item=>item.classRoom===room)
        // console.log(room)
        return (
            <div>
                <h1>班级详情</h1>
                <hr/>
                <div>
                    <select value={this.state.sel_val} onChange={(e)=>{
                       let xx=list.filter((item,index)=>{
                           return item.classRoom===e.target.value
                       }).classRoom
                        this.setState({
                            sel_val:xx
                        })
                    }}>
                        {list.map((item,index)=>{
                            return <option key={index}>{item.classRoom}</option>
                        })}
                    </select>
                </div>
                <div>
                <div>
                    {list&&list[ind]&&list[ind].children&&list[ind].children.map((item,index)=>{
                        return <div key={index}
                        ><span>{index+1}</span><span onClick={()=>{
                            this.props.history.push("/studentdetail",{room,item})
                        }}>{item.name}</span></div>
                    })}
               </div>
               <hr/>
                <Icon type="plus-square" style={{fontSize:"50PX"}} onClick={()=>{
                    this.props.history.push("/addstudent",{room:room})
                }}/>
                </div>
                <Button type="primary" onClick={()=>{
                    this.props.history.push("/addclassroom")
                }}>添加班级</Button>
                <Button type="primary"  onClick={()=>{
                    this.props.history.push("/classroommanager")
                }}>班级管理</Button>
                <Button type="primary"  onClick={()=>{
                    this.props.history.push("/addstudent",{room:room})
                }}>添加学生</Button>
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
classroomdetail=connect(mapStateToProps,mapDispatchToProps)(classroomdetail)
export default classroomdetail;
