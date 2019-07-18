import React, { Component } from 'react'
import "./App.css"
export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dataList:["螺旋邯钢","热镀锌","角果","直槽钢","工业线材","园培","钢管"],
      code:-1,
      list:[],
      
    }
  }
  
  render() {
    let {dataList,code,list}=this.state
    return (
      <div className="app">
        <div className="shang">
          <button onClick={()=>{
            this.setState({
              list:[]
            })
          }}>全部清除</button>
          {list.map((item,ind)=>{
            return <b key={ind} onClick={()=>{
              list.splice(ind,1)
              this.setState({
                list
              })
            }}>{item}x</b>
          })}
        </div>
        <div className="xia">
          {dataList.map((item,index)=>{
            return <span key={index}
             onClick={()=>{
              list.push(dataList[index])
              this.setState({
                code:index,
              })
             }}
             className={index===code?"act":""}
             >{item}</span>
          })}
          <button onClick={(e)=>{
            
          }}>多选</button>
        </div>
      </div>
    )
  }
}

export default App
