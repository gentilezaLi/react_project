import React, { Component } from 'react'
import { Button } from "antd"
import { connect } from "react-redux"

class addStudent extends Component {
    state = {
        val: ''
    }
    addStudent() {
        let classRoom = this.props.location.state
        this.props.saveStudent({ name: this.state.val, classRoom })
        //点击添加学生每次清空
        this.setState({
            val:""
        })
    }
    render() {
        let { list } = this.props
        let classRoom = this.props.location.state

        return (
            <div>
                <h1>添加学生</h1>
                <hr />
                <input type="text" value={this.state.val} onChange={(e) => {
                    this.setState({
                        val: e.target.value
                    })
                }} />
                <Button type="danger" onClick={this.addStudent.bind(this)}>添加学生</Button>
                <hr />
                {list.length !== 0 &&
                    list[list.findIndex(item => item.classRoom === classRoom)].studentList.map((item, index) => {
                        return <li key={index}><b>{index + 1}</b>&nbsp;&nbsp;&nbsp;&nbsp;<span>{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={() => {
                                this.props.history.push("/studentDetail", { item })
                            }}>编辑</span></li>
                    })
                }
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
        saveStudent: (obj) => {
            dispatch({ type: "ADD_STUDENT", obj })
        }
    }
}
addStudent = connect(mapStateToProps, mapDispatchToProps)(addStudent)
export default addStudent;
