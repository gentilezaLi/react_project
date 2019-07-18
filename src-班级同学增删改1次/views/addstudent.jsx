import React, { Component } from 'react'
import {Button} from "antd"
import { connect} from "react-redux"

 class addstudent extends Component {
    state={
        name:""
    }
    add(){
        let {room}=this.props.location.state
        console.log(room,"添加学生的班级")
        let list=this.props.list
        let ind=list.findIndex(item=>item.classRoom===room)
        console.log(list)
        let obj={
            name:this.state.name,
            class:room
        }
        list[ind].children.push(obj)
        this.setState({
            name:''
        })
        this.props.addstudent(list)
        
    }
    render() {
        let {room}=this.props.location.state
        let list=this.props.list
        let ind=list.findIndex(item=>item.classRoom===room)
        return (
            <div>
                <h1>添加学生</h1>
                <input type="text" value={this.state.name} onChange={(e)=>{
                    this.setState({
                        name:e.target.value
                    })
                }}/>
                <Button type="danger" onClick={this.add.bind(this)}>添加学生</Button>
              <hr/>
              <h1>班级号{list&&list[ind]&&list[ind].classRoom}</h1>
              <hr/>
               <div>
                    {list[ind].children.map((item,index)=>{
                        return <div key={index}
                        ><span>{index+1}</span><span onClick={(e)=>{
                            this.props.history.push("/studentdetail",{room,item})
                        }}>{item.name}</span></div>
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
addstudent=connect(mapStateToProps,mapDispatchToProps)(addstudent)
export default addstudent;
