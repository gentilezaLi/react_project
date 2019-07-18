import React, { Component } from 'react'
import {Button} from "antd"
import { connect} from "react-redux"
 class classroommanager extends Component {
    state={
        classroomval:"",
    }
    savealldata(){
    
        let obj={
            classRoom:this.state.classroomval,
            children:[]
        }
        
        this.props.savealldata(obj)
        this.props.history.push("/classroomdetail",{room:obj.classRoom})
    }
    render() {
        return (
            <div>
                <h1>添加班级</h1>
                <input type="text" value={this.state.classroomval} onChange={(e)=>{
                    this.setState({
                        classroomval:e.target.value
                    })
                }}/>
                <br/>
                <Button type="primary" onClick={this.savealldata.bind(this)}>创建班级</Button>
            </div>
        )
    }
}
let mapStateToProps=(state)=>{
    return{}
}
let mapDispatchToProps=(dispatch)=>{
    return {
        savealldata:(obj)=>{
            dispatch({type:"ALLDATA",obj})
        }
    }
}
classroommanager=connect(mapStateToProps,mapDispatchToProps)(classroommanager)
export default classroommanager;
