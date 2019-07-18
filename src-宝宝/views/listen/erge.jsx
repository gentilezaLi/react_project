import React, { Component } from 'react'
import "../../css/erge.css"
import axios from "axios"
import ListenItem from "../../components/listen_Item"
export default class erge extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    render() {
        let {list} =this.state

        return (
            <div className="erge">
                {list.map((item,index)=>{
                    return <ListenItem key={index} {...item} ind={index}
                    />
                })}
            </div>
        )
    }
    componentDidMount() {
        // "http://bb.shoujiduoduo.com/baby/bb.php?type=getlist&pagesize=30&listid=5"
        axios.get("/api/baby/bb.php?type=getlist&pagesize=30&listid=5").then(res=>{
            console.log(res.data)
            this.setState({
                list:res.data.list.splice(1)
            })
        })
    }
}
