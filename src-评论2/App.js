import React, { Component } from 'react'
import "./App.css"
import List from "./components/list"
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isShow:false,
      name:'',
      text:'',
      id:'',
      dataList:[
        {
          img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2153937626,1074119156&fm=27&gp=0.jpg",
          name:"张三",
          text:"哈喽",
          iszan:true,
        },
        {
          img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg",
          name: "李四",
          text: "哈喽哈喽",
          iszan: false,
        }
      ]
    }
    this.inpchange = this.inpchange.bind(this)
    this.textchange = this.textchange.bind(this)
    this.tijiao = this.tijiao.bind(this)
  }
  render() {
    let { dataList,isShow} =this.state
    return (
      <div className="app">
        <div className="header">
          <p>热门评论({this.state.dataList.length})</p>
          <span onClick={()=>this.setState({isShow:true})}>写评论</span>
        </div>
        <div className="main">
          {dataList.map((item,index)=>{
            return <List key={index} {...item} onhandle={()=>this.eve(index)}/>
          })}
        </div>
        {
          isShow?<div className="footer">
          <input type="text" onChange={this.inpchange}/><br/>
          <textarea name="" id="" cols="30" rows="8" onChange={this.textchange}></textarea><br/>
          <button onClick={this.tijiao}>提交</button>
        </div>:''
        }
        
      </div>
    )
  }
  eve(ind){
    let newList=this.state.dataList
    newList[ind].iszan = !newList[ind].iszan
    this.setState({
      dataList: newList
    })
  }
  inpchange(e){
    this.setState({ name: e.target.value})
  }
  textchange(e){
    this.setState({text:e.target.value})
  }
  tijiao(e){
    e.preventDefault()
    if(!this.state.text.length||!this.state.name.length){
      return;
    }
    let newList={
      img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2363037083,4182949652&fm=27&gp=0.jpg",
      name:this.state.name,
      text:this.state.text,
      iszan:true,
      time:new Date().toLocaleDateString(),
      id: Date.now()
    }
    this.setState({
      dataList: this.state.dataList.concat(newList),
      text:"",
      isShow:false,
    })
  }
  
}
