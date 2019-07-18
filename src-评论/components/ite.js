import React, { Component } from 'react'
import "./css/ite.css"
import Dianzan from "./dianzan"
import Pinglun from "./pinglun"
import Zhuanfa from "./zhuanfa"
import watcher from "./watcherInsTance"

export default class ite extends Component {
    constructor(props){
        super(props);
        this.state={
            val:''
        }
    }
componentDidMount(){
    
}

    render() {
        return (
            <div className="ite">
                <p>{this.props.title}</p>
                <img src={this.props.img} alt=""/>
                <div className="box">
                    <Dianzan zan={this.props.zan} id={this.props.id}/>
                    <Pinglun id={this.props.id}/>
                    <Zhuanfa/>
                </div>
                {this.props.isShow&&<div className="inp">
                    <p><input type="text" value={this.state.val} onChange={(e)=>{
                        this.setState({
                            val:e.target.value
                        })
                    }}/>
                    <button onClick={()=>{
                            watcher.publish("sub", this.props.id,this.state.val)
                            this.setState({
                                val:''
                            })
                    }}>提交</button></p>
                </div>}
                {/* <p>{this.state.val}</p> */}
                <div className="gift">
                    {this.props.con.map((item,i)=>{
                        return <p key={i}>{item}</p>
                    })}
                    
                </div>
            </div>
        )
    }
}
