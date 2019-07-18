import React, { Component } from 'react'
import List from "./components/list"
import "./App.css"
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isShow:false,
      text:"",
      name:"",
      id:'',
      count:0,
      dataList:[
        {
          img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3409605815,553104213&fm=27&gp=0.jpg",
          name:"张三",
          is:true,
        },
        {
          img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4081007141,4005221342&fm=27&gp=0.jpg",
          name: "张四",
          is: false,
        }
      ]
    };
    this.inpchange = this.inpchange.bind(this)
    this.textchange = this.textchange.bind(this)
    this.tijiao = this.tijiao.bind(this)
  }
  render() {
    let { dataList,isShow} =this.state
    return (
      <div className="container">
      <div className="header">
          <span>热门({dataList.length})</span>
        <p onClick={()=>{this.setState({isShow:true})}}> 写评论</p>
      </div>
      <div className="main">
        {dataList.map((item,index)=>{
         return <List key={index} {...item} ind={index} count={this.state.count} onClick={()=>this.eve(index)}
         dianji={this.dianji.bind(this,index)}/>
        })}
        </div>
        {
          isShow?
            <div className="footer">
              姓名：<input type="text" onChange={this.inpchange}/><br/>
              评论内容：<textarea name="" id="" cols="30" rows="4" onChange={this.textchange}></textarea>
              <button onClick={this.tijiao}>确定</button>
            </div>
            :''
        } 
      </div>
    )
  }
  dianji(ind){
    this.setState({
      count:ind
    })
  }
  //点赞
  eve(ind){
    let newList = this.state.dataList
    newList[ind].is = !newList[ind].is

    this.setState({
      dataList: newList
    })
  }
  //点击提交
  tijiao(e){
    e.preventDefault();
    if(!this.state.text.length){
      return;
    }
    const newIte={
      img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=46080124,1294984261&fm=27&gp=0.jpg",
      name:this.state.name,
      text: this.state.text,
      is:true,
      time:new Date().toLocaleDateString(),
      id:Date.now()
    }
    this.setState({
      dataList: this.state.dataList.concat(newIte),
      text:"",
      isShow:false
    })
  }
  //input 改变
  inpchange(e){
    this.setState({name:e.target.value})
  }
  //文本域 改变
  textchange(e){
    this.setState({ text: e.target.value})
  }
}
