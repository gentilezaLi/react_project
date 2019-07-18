import React, { Component } from 'react'
import axios from "axios"
import "../../css/dong.css"
import DongItem from "../../components/dong_item"
export default class er extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    render() {
        let {list} =this.state
        return (
            <div className="dong">
                {list.map((item,index)=>{
                    return <DongItem key={index} {...item} ind={index}/>
                })}
                
            </div>
        )
    }
    componentDidMount() {
        // "http://bb.shoujiduoduo.com/baby/bb.php?type=getlistv2&act=home&pagesize=30&pid=26"
        axios.get("/api/baby/bb.php?type=getlistv2&act=home&pagesize=30&pid=26").then(res=>{
            console.log(res.data)
            this.setState({
                list:res.data.list.splice(1)
            })
        })
    }
}
