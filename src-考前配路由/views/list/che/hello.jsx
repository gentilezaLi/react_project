import React, { Component } from 'react'
import "../../../css/hello.css"
import {connect } from "react-redux"
import Item from "../../../components/item"
class hello extends Component {
    constructor(props){
        super(props);
        this.state={
            colorList:["orange","skyblue","green","yellow","purple"],
            z_num:0,
            z_money:0,
            code:0
        }
    }
    render() {
        let {colorList}=this.state
        let {list} =this.props
        this.state.z_num=0;
        this.state.z_money=0
        list.forEach((item,index)=>{
            this.state.z_num+= item.num*1
            this.state.z_money+=item.num*item.money*1
        })
        
        return (
            <div className="hello">
                <div className="h_h">
                    <div className="box">{
                        colorList.map((item,index)=>{
                            return <span key={index} 
                            style={{background:item,border:this.state.code===index?"solid 5px black":""}}
                                onClick={()=>{
                                    this.setState({
                                        code:index
                                    })
                                }}
                            ></span>
                        })
                    }</div>
                </div>
                <div className="h_c">
                    {list.map((item,index)=>{
                        return <Item key={index} {...item}/>
                    })}
                </div>
                <div className="computed">
                    <span>总价钱：({this.state.z_money})</span>
                    <span>总数量：({this.state.z_num})</span>
                    <span onClick={()=>{
                        this.props.history.push("/list/che/world",{list:list.filter(item=>item.num!==0),cor:this.state.colorList[this.state.code]})
                    }}>购买</span>
                </div>
            </div>
        )
    }
}
let mapStateToProps=(state)=>{
    return{
        list:state.allDataReducer
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{}
}
hello=connect(mapStateToProps,mapDispatchToProps)(hello)
export default hello;
