import React, { Component } from 'react'

export class inp extends Component {
    constructor(props){
        super(props);
        this.state={
            user:'',
            pwd:'',
            yzm:'',
            suiji:'1234'
        }
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="应输入用户名" value={this.state.user} onChange={(e)=>{
                    this.setState({
                        user:e.target.value
                    })
                }}/><br/>
                <input type="text" placeholder="请输入密码" value={this.state.pwd}  onChange={(e)=>{
                    this.setState({
                        pwd:e.target.value
                    })
                }}/><br/>
                <input type="text" placeholder="请输入验证码" value={this.state.yzm}  onChange={(e)=>{
                    this.setState({
                        yzm:e.target.value
                    })
                }}/><span onClick={(e)=>{
                    // console.log(e.target.innerText)
                    let arr=[1,2,3,4,5,6,7,8,9,0]
                    let brr=''
                    for(var i=0;i<4;i++){
                        brr+=Math.floor(Math.random()*arr.length)
                    }
                    this.setState({
                        suiji:brr
                    })
                }}>{this.state.suiji}</span><br/>
                <button onClick={()=>{
                    
                    console.log(this.state)
                }}>登录</button>
            </div>
        )
    }
}

export default inp
