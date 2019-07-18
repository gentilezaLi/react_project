import React, { Component } from 'react'
import "../utils/md5Utils"
import "../css/login.css"
export class login extends Component {
    constructor(props){
        super(props);
        this.state={
            user:'',
            pwd:''
        }
    }
    render() {
        return (
            <div className="login">
                <div className="heade">登录</div>
                <div>
                姓名：<input type="text" placeholder="请输入用户名" value={this.state.user} onChange={(e)=>{
                    this.setState({
                        user:e.target.value
                    })
                }}/></div>
                <div>密码：<input type="text" placeholder="请输入密码" value={this.state.pwd} onChange={(e)=>{
                    this.setState({
                        pwd:e.target.value
                    })
                }}/></div>
                <div>
                <span onClick={()=>{
                    let user =this.state.user
                    let pwd=this.state.pwd
                    let md5Prev=user+pwd
                    let md5=md5Prev.MD5()
                    console.log(md5)
                    localStorage.setItem("toking",md5)
                    this.props.history.go(-1) 
                }}>登录</span></div>
            </div>
        )
    }
}

export default login
