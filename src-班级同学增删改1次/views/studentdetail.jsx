import React, { Component } from 'react'
import { Button } from "antd"
import { connect } from "react-redux"
class studentdetail extends Component {
    del() {
        let room = this.props.location.state.room
        let namem = this.props.location.state.item.name
        let { list } = this.props
    console.log(this.props)
            let ind = list.findIndex(item => item.classRoom === room)
            let ind_n = list[ind].children.findIndex(item => item.name === namem)
            list[ind].children.splice(ind_n, 1)
            alert("删除成功")
            this.props.history.go(-1)
    }
    render() {
        // console.log(this.props)
        let room = this.props.location.state.room
        let namem = this.props.location.state.item.name
       
        return (
            <div>
                <h1>学生详情</h1>
                <span>班级：{room}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>姓名：{namem}</b>
                <br />
                <Button type="danger" onClick={this.del.bind(this)}>删除学生</Button>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        list: state.addstudentreducer
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
studentdetail = connect(mapStateToProps, mapDispatchToProps)(studentdetail)
export default studentdetail;
