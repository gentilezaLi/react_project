import React, { Component } from 'react'
import List from "./components/index"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [
        {
          img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2153937626,1074119156&fm=27&gp=0.jpg",
          name: "张三",
          isLardear: true
        },
        {
          img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg",
          name: "李四",
          isLardear: true
        },
        {
          img: "http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg",
          name: "王五",
          isLardear: true
        }
      ]
    }
  }

eve(i){
  let newDataList=this.state.dataList
  newDataList[i].isLardear = !newDataList[i].isLardear
  this.setState({
    dataList: newDataList
  })
}

  render() {
    let { dataList} =this.state
    return (
      <div className="wrap">
        {dataList.map((item,index)=>{
          return <List key={index} {...item} onClick={() => this.eve(index)}/>
        })}
      </div>
    )
  }
}

export default App;
