import React, { Component } from 'react'
import Children from "./children"
import axios from "axios"
import "./father.css"
export default class father extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            flag: false,
            timer: null,
            valList:[],
            val:null,
            newList:[]
        }
    }
    render() {
        let { list, flag, valList, newList} = this.state
        return (

            <div>
                <button onClick={() => this.setState({
                    flag: true,
                    timer: setTimeout(() => {
                        this.setState({
                            flag: false,
                        })
                        this.getData()
                    }, 2000)
                }
                )}>刷新</button>

                <input type="text" onChange={(e)=>{
                    newList=[]
                    valList.map(item=>{
                        if(item.includes(e.target.value)){
                            newList.push(item)
                        }
                    })
                    
                    this.setState({
                        val:e.target.value,
                        newList: newList
                    })
                }}/>
                <p>{this.state.val}</p>
                {
                    newList.map((item,index)=>{
                        return <b key={index}>{item}</b>
                    })
                }
                
                <Children list={list} />
                {flag && <div className="father">
                    <img src="http://localhost:3001/loading.gif" alt="" />
                </div>}


            </div>
        )
    }
    //封装公共函数请求数据
    getData() {
        axios.get("http://localhost:3000/api", {}).then(res => {
            console.log(res.data)
            this.setState({
                list: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
    componentDidMount() {
        this.getData()
        axios.get("http://localhost:3000/ind",{}).then(res=>{
            console.log(res.data)
            this.setState({
                valList:res.data
            })
        })
    }

    componentWillUnmount() {
        //同步
        // clearInterval(this.state.timer)
        //异步
        this.setState((state, props) => {
            clearTimeout(state.timer)
        })
    }
}
