import React, { Component } from 'react'
import { connect } from "react-redux"
import "../css/shi.css"
import axios from "axios"
class yinping extends Component {
    eve(ind) {
        console.log(this.props.list.urls)
        axios.get(`http://api.cnfuyin.net/api/url/index?movid=2596&urlid=${ind}&app=fytv&device=android&version=3.0.2`).then(res=>{
            console.log(res.data)
            this.props.saveYing({type:"CUNVIDEO",dan:res.data})
            
        }) 
        this.props.saveNum(2)
    }
    render() {

        return (
            <div className="shi">
                {this.props.list.urls && this.props.list.urls.map((item, index) => {
                    return <span key={index}  onClick={this.eve.bind(this, item.urlid)}>{item.title.slice(0, 4)}</span>
                })}
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        list: state.FuYinReducer
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        saveYing:(fn)=>{
            dispatch(fn)
        },
        saveNum:(num)=>{
            dispatch({type:"NUM",num})
        }

    }
}
yinping = connect(mapStateToProps, mapDispatchToProps)(yinping)
export default yinping;
