import React, { Component } from 'react'
import Dianzan from "./dianzan"
import Pinglun from "./pinglun"
import Zhuanfa from "./zhuanfa"
import "./css/ite.css"
import watcher from "./watcherInit"
import propTypes from "prop-types"
export default class ite extends Component {
    constructor(props){
        super(props);
        this.state={
            val:''
        }
    }
    render() {
        let {title,img,zan,id,flag,con}=this.props
        let {val}=this.state
        return (
            <div className="ite">
                <h1>标题：{title}</h1>
                <img src={img} alt=""/>
                <div className="box">
                    <Dianzan zan={zan} id={id}/>
                    <Pinglun id={id}/>
                    <Zhuanfa item/>
                </div>
                {
                    flag&&<div>
                        <input type="text" value={this.state.val}
                        onChange={(e)=>{
                            this.setState({
                                val:e.target.value
                            })
                        }}/>
                        <button onClick={()=>{
                            watcher.publish("sub",id,val)
                            this.setState({
                                val:''
                            })
                        }}>确定</button>
                    </div>
                }
                <div>
                    {
                     con.map((item,index)=>{
                        return <p key={index}>
                             {item}
                         </p>
                     })   
                    }
                    
                </div>
            </div>
        )
    }
}
ite.propTypes={
    zan:propTypes.number
}