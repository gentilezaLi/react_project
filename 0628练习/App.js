import React, { Component } from 'react'
import "./App.css"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["推荐", "男装", "女装", "眼睛", "配饰", "婴童", "鞋靴", "运动", "皮具", "出行"],
      code:0,
      num1:true,
      num2:false,
    }
  }
  eve(id){
    this.setState({
      code:id
    })
  }
  render() {
    return (
      <div className="app">
        <div className="header">
          {this.state.num1&& <div className="nav">
            {this.state.list.map((item, index) => {
              return <span key={index}
              style={this.state.code==index?{color:"red",borderBottom:"solid 1px red"}:{}}
              onClick={this.eve.bind(this,index)}>{item}</span>
            })}
            <div className="xia" onClick={()=>{
              this.setState({
                num1:false,
                num2:true,
              })
            }}>向下</div>
          </div>}
         
          
        </div>
        {this.state.num2&&<div className="nav2">
          
        <div className="shang" onClick={()=>{
              this.setState({
                num1:true,
                num2:false,
              })
            }}>向上</div>
            {this.state.list.map((item, index) => {
              return <span key={index}
              style={this.state.code==index?{color:"red",borderBottom:"solid 1px red"}:{}}
              onClick={this.eve.bind(this,index)}>{item}</span>
            })}
            
        </div>}
        {/* <div className="nav3">
        <div className="box">
          {this.state.list.map((item, index) => {
              return <span key={index}
              style={this.state.code==index?{color:"red",borderBottom:"solid 1px red"}:{}}
              onClick={this.eve.bind(this,index)}>{item}</span>
            })}</div>
        </div> */}
        
        
        
      </div>
    )
  }
}
