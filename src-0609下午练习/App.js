
import React from 'react';
import './App.css';
import List from "./components/List"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: ["热门班型", "相关课程"],
      dataList: [
        {
          img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2153937626,1074119156&fm=27&gp=0.jpg",
          title: "互联网数据库基础学习班1",
          money: "100.00",
          how: "949人购买"
        },
        {
          img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=234634259,4236876085&fm=27&gp=0.jpg",
          title: "互联网数据库基础学习班2",
          money: "100.00",
          how: "1021人购买"
        },
        {
          img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3692441613,3435428941&fm=27&gp=0.jpg",
          title: "互联网数据库基础学习班3",
          money: "100.00",
          how: "802人购买"
        },
      ],
      flag:true,
      dataList2:[
        {
          img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=310867335,47017775&fm=27&gp=0.jpg",
          name:"星空"
        },
        {
          img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3230740943,2194698121&fm=27&gp=0.jpg",
          name: "动漫"
        },
        {
          img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2196727900,1362915006&fm=27&gp=0.jpg",
          name: "鲜花"
        },
      ]
    }
  }

  render() {
    let { flag,dataList2}=this.state
    return (
      <div className="container">
        <div className="header">互联网数据库</div>
        <div className="nav">
          {this.state.navList.map((item, index) => <span key={index}>{item}</span>)}
        </div>
        <div className="main">
          {this.state.dataList.map((item, index) => {
            return <dl className="ite" key={index}>
              <dt onClick={this.eveve.bind(this, item.img, index)} >
                <img src={item.img} alt=""/>
              </dt>
              <dd>
                <p onClick={this.evev.bind(this, item.title, index)}>{item.title}</p>
                <p onClick={this.eve.bind(this, item.money, index)}>￥{item.money}</p>
                <p>{item.how}</p>
              </dd>
            </dl>
          })}
          <button onClick={()=>{
            
            this.setState({ flag:!flag})            
            
          }}>{flag?"老虎":"狮子"}</button>
          {
            flag?
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2294916239,2474126310&fm=26&gp=0.jpg" alt=""/>
            :
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560079304099&di=fa34e24930609b9f3872ef97ac428560&imgtype=0&src=http%3A%2F%2Fwww.juimg.com%2Ftuku%2Fyulantu%2F131224%2F328213-131224104U755.jpg" alt=""/>
          }
          {dataList2.map((item,index)=>{
            return <List key={index} {...item}/>
          })}
          </div>
        <div className="footer"></div>
      </div>
    )
  }
  eve(ite,ind){
    this.state.dataList[ind].money= ite*1+100
    this.setState({})
  }
  evev(ite, ind){
    console.log(this.state.dataList[ind].title)
    this.setState({})
  }
  eveve(ite, ind) {
    console.log(this.state.dataList[ind].img)
    this.setState({})
  }
}

export default App;