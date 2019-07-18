import React, { Component } from 'react'
import axios from "axios"
import ErItem from "../../components/er_item"
export default class er extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    render() {
        let {list}=this.state
        return (
            <div className="er">
                {list.map((item,index)=>{
                    return <ErItem key={index} {...item} ind={index}/>
                })}
            </div>
        )
    }
    componentDidMount() {
        // "http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=27"
        axios.get("/api/baby/bb.php?type=getvideos&pagesize=30&collectid=27").then(res=>{
            console.log(res.data)
            this.setState({
                list:res.data.list.splice(1)
            })
        })
    }
    
}
