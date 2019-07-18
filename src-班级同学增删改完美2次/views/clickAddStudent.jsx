import React, { Component } from 'react'
import {Icon,Button} from "antd"
import {connect} from "react-redux"
class clickAddStudent extends Component {
    constructor(props){
        super(props)
        let classRoom=this.props.location.state
        this.state={
        sel_val:classRoom
    }
    }
    
    //点击添加跳添加学生
    clickAdd(){
        let classRoom=this.props.location.state
        this.props.history.push("/addStudent",classRoom)
    }
    render() {
        // console.log(this.props.location.state)
        let {list} =this.props
        let classRoom = this.props.location.state
        return (
            <div>
                <h1>点击添加</h1>
                <hr/>
                <select name="" id="" value={this.state.value} onChange={(e)=>{
                    this.setState({
                        sel_val:e.target.value
                    })
                    console.log(this.state.sel_val)
                    
                }}>
                    {list.map((item,index)=>{
                        return <option value={item.classRoom} key={index}>{item.classRoom}</option>
                    })}
                </select>
                <hr/>
                <Icon type="plus-square" style={{fontSize:"50px"}}
                     onClick={this.clickAdd.bind(this)}/>
                <hr/>
                {list.length !== 0 &&
                    list[list.findIndex(item =>item.classRoom === this.state.sel_val )].studentList.map((item, index) => {
                        return <li key={index}><b>{index + 1}</b>&nbsp;&nbsp;&nbsp;&nbsp;<span>{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={() => {
                                this.props.history.push("/studentDetail", { item })
                            }}>编辑</span></li>
                    })
                }
                <hr/>
                <Button type="primary" onClick={()=>{
                    this.props.history.push("/createClassRoom")
                }}>添加班级</Button>
                <Button type="primary" onClick={()=>{
                    this.props.history.push("/addStudent",classRoom)
                }}>添加学生</Button>
                <Button type="primary" onClick={()=>{
                    this.props.history.push("/classRoomManger",{classRoom})
                }}>管理班级</Button>
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
        
    }
}
clickAddStudent = connect(mapStateToProps, mapDispatchToProps)(clickAddStudent)
export default clickAddStudent;