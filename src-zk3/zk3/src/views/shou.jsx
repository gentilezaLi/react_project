import React, { Component } from 'react'
import axios from "axios"
import "../css/shou.css"
import Left from "../components/left"
import {withRouter} from "react-router-dom"
 class shou extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            code:0,
            rightList:[]
        }
    }
     async componentDidMount() {
         axios.get("/api/left").then(res=>{
            console.log(res.data)
             this.setState({
                list:res.data
            })
        })
        axios.get("/api/right").then(res=>{
        console.log(res.data)
        this.setState({
            rightList:res.data
       })
       })
    }
    eve(ind){
        this.setState({
            code:ind
        })
    }
    render() {
        console.log(this.props)
        return (
            <div className="shou">
            <div className="header">
                校园超市
            </div>
            <div className="con">
                <div className="left">
                    {this.state.list.map((item,index)=>{
                        return <p key={index} 
                            onClick={this.eve.bind(this,index)}
                            className={index===this.state.code?"act":""}
                        >{item.title}</p>
                    })}
                   
                   
                </div>
                <div className="right">
                {this.state.rightList.map((item,index)=>{
                    if(item.r_id===this.state.code){
                        return <p key={index} onClick={()=>{
                            this.props.history.push("/detail",item.title)
                        }}>{item.title}</p>
                    } 
                })}
                </div>
            </div>
            
            </div>
        )
    }
}
shou=withRouter(shou)
export default shou;