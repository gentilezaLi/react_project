import React, { Component } from 'react'
import "./css/list.css"
import Ite from "./ite"
import watcher from "./watcherInit"
export default class list extends Component {
    constructor(props){
        super(props);
        this.state={
            num:'',
            dataList:[
                {
                    title:"小姨子跑了",
                    img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2153937626,1074119156&fm=27&gp=0.jpg",
                    zan:0,
                    id:0,
                    flag:false,
                    con:["hehe"],

                },
                {
                    title:"姐姐跑了",
                    img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg",
                    zan:0,
                    id:1,
                    flag:false,
                    con:[]

                },{
                    title:"妹妹跑了",
                    img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=234634259,4236876085&fm=27&gp=0.jpg",
                    zan:0,
                    id:2,
                    flag:false,
                    con:[]

                }
            ]
        }
    }
    componentDidMount() {
        watcher.subscribe(this.eve.bind(this))
    }
    
    eve(type,ind,val){
        let list=this.state.dataList
        if(type==="zan"){
            list[ind].zan=list[ind].zan+1
        }
        if(type==="ping"){
            list[ind].flag=!list[ind].flag
        }
        if(type==="sub"){
            list[ind].con.push(val)
            list[ind].flag=false
        }
        this.setState({
            dataList:list
        })
        this.state.num=0
        list.map(item=>this.state.num+=item.zan)

    }
    render() {
        let {dataList}=this.state
        return (
            <div className="list">
                <h2>总赞数{this.state.num}</h2>
                {dataList.map((item,index)=>{
                    return <div key={index} >
                        <Ite {...item}/>
                    </div>
                })}
            </div>
        )
    }
}
