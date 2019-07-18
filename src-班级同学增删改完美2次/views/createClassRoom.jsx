import React, { Component } from 'react'
import { Button } from "antd"
import { connect } from "react-redux"
class createClassRoom extends Component {
    state = {
        val: ""
    }
    //点击创建班级
    creatClassRoom() {
        if (this.props.list.some(item => item.classRoom === this.state.val)) {
            alert("此班级已存在")
        } else {
            this.props.saveClassRoom({ classRoom: this.state.val, studentList: [] })
            this.props.history.push("/clickAddStudent", this.state.val)
        }


    }
    render() {
        return (
            <div>
                <h1>创建班级</h1>
                <hr />
                <input type="text" value={this.state.val} onChange={(e) => {
                    this.setState({
                        val: e.target.value
                    })
                }} />
                <br />
                <Button type="primary" onClick={this.creatClassRoom.bind(this)}>创建班级</Button>
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
        saveClassRoom: (obj) => {
            dispatch({ type: "ADD_CLASS", obj })
        }
    }
}
createClassRoom = connect(mapStateToProps, mapDispatchToProps)(createClassRoom)
export default createClassRoom;
