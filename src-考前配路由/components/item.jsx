import React, { Component } from 'react'
import "../css/item.css"
import {connect} from "react-redux"
class item extends Component {
    eve(id,type){
        let list=this.props.list
        if(type==="+"){
            list[id].num++
        }else{
            list[id].num--
        }
        this.props.saveNum(list)
    }
    render() {
        return (
            <div className="item" style={{border:this.props.num===0?"":"solid 2px green"}}>
                <h2>{this.props.title}</h2>
                <p>价格：{this.props.money}</p>
                <span onClick={this.eve.bind(this,this.props.id,"+")}>+</span>
                {this.props.num?<span  onClick={this.eve.bind(this,this.props.id,"-")}>-</span>:""}
                {this.props.num?<b>{this.props.num}</b>:""}
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
    return{
        saveNum:(list)=>{
            dispatch({type: "ALL_DATA",list})
        }
    }
}
item=connect(mapStateToProps,mapDispatchToProps)(item)
export default item;
