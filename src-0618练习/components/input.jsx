import React, { Component } from 'react'
import propTypes from "prop-types"
export default class input extends Component {
    constructor(props){
        super(props);
        this.state={
            zhen:'',
            shen:'',
            she:'',
            shou:'',
            zui:'',
            shui:'',
            dan:'',
            quan:'',
        }
    }
    render() {
        return (
            <div>
                真实姓名：<input type="text" onChange={(e)=>{
                    this.setState({
                        zhen:e.target.value
                    })
                }}/><br/>
                身份证号：<input type="number" onChange={(e)=>{
                    this.setState({
                        shen:e.target.value
                    })
                }}/><br/>
                社保卡号：<input type="number" onChange={(e)=>{
                    this.setState({
                        she:e.target.value
                    })
                }}/><br/>
                手机号码：<input type="number" onChange={(e)=>{
                    this.setState({
                        shou:e.target.value
                    })
                }}/><br/>
                最高学历：<input type="text" onChange={(e)=>{
                    this.setState({
                        zui:e.target.value
                    })
                }}/><br/>
                税后月薪：<input type="text" onChange={(e)=>{
                    this.setState({
                        shui:e.target.value
                    })
                }}/><br/>
                单位全称：<input type="text" onChange={(e)=>{
                    this.setState({
                        dan:e.target.value
                    })
                }}/><br/>
                单位座机：<input type="text" onChange={(e)=>{
                    this.setState({
                        quan:e.target.value
                    })
                }}/><br/>
                这24个月内是否有逾期记录？：
                <input type="radio" />有
                <input type="radio" />无<br/>
                <button onClick={()=>{
                    console.log(this.state)
                }}>申请0首付购车</button>
            </div>
        )
    }
    
}
//验证
input.propTypes={
    zhen:propTypes.string,
    shen:propTypes.string,
    she:propTypes.string,
    shou:propTypes.string,
    zui:propTypes.string,
    shui:propTypes.string,
    dan:propTypes.string,
    quan:propTypes.string,
}
