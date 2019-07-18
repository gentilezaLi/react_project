import React, { Component } from 'react'
import Ite from "./ite"
import "./css/home.css"
import watcher from "./watcherInsTance"
export default class home extends Component {
    constructor(props){
        super(props);
        this.state={
            num:'',
            dataList:[
                {
                    title:"江南皮革厂倒闭了，老板和小姨子跑了1",
                    zan:0,
                    id:0,
                    con:["hehe","haah"],
                    isShow:false,
                    img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2153937626,1074119156&fm=27&gp=0.jpg",
                },
                {
                    title: "江南皮革厂倒闭了，老板和小姨子跑了2",
                    zan: 0,
                    id: 1,
                    con: ["hehe"],
                    isShow: false,
                    img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg",
                },
                {
                    title: "江南皮革厂倒闭了，老板和小姨子跑了3",
                    zan: 0,
                    id: 2,
                    con: ["hehe"],
                    isShow: false,
                    img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1718395925,3485808025&fm=27&gp=0.jpg",
                }
            ]
        }
    }
    componentDidMount(){
        watcher.subscribe(this.eve.bind(this))
    }
    eve(type,ind,val){
        let list = this.state.dataList
        // console.log(val)
        list.map(item=>this.state.num+=item.zan)
        if(type==="zan"){
           list[ind].zan = list[ind].zan+1 
        } else if (type==="ping"){
            list[ind].isShow = !list[ind].isShow
        } else if (type === "sub"){
             list[ind].con.push(val)
            list[ind].isShow = !list[ind].isShow

        }
        
        this.setState({
            dataList: list
        })
        
        this.state.num = 0

        list.map(item=>this.state.num+=item.zan)
    }
    
    render() {
        let { dataList} =this.state
        return (
            <div className="home">
                <button>发布</button>
                
                <h1>总赞数{this.state.num}</h1>
                {
                    dataList.map((item,index)=>{
                        return <div key={index}>
                            <Ite {...item}/>
                        </div>
                    })
                }
            </div>
        )
    }
}
