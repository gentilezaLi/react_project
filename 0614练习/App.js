import React, { Component } from 'react'
import Ite from "./components/ite"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val:'',
      newList:[],
      flag:false,
      dataList: ["liuyu@1", "liuyu@163.com", "liuyu@126.com", "liuyu@188.com", "liuyu@139.com"]
    }

  }
  render() {
    let { dataList, newList} = this.state
    return (
      <div>
        <input type="text" onChange={(e)=>{
          newList=[]
          dataList.map((item,index)=>{
            if(item.includes(e.target.value)){
              newList.push(item)
            }
          })
          this.setState({
            val: e.target.value,
            newList: newList
          })
        }}/>
        <p>{this.state.val}</p>
        {
          newList.map((item, index) => {
            return <b key={index}>{item}</b>
          })
        }
      </div>
    )
  }
}
