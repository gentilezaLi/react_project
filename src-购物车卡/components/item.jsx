import React, { Component } from 'react'
import "../css/item.css"
import {connect} from "react-redux"
class item extends Component {
   
    add(type,id){
        if(type=="+"){
            let list=this.props.cardList
            list[id].num++
            this.props.changeNum(list)
        }else{
            let list=this.props.cardList
            list[id].num--
            this.props.changeNum(list)
        }
    }
    
    render() {
        let { type, money ,num,id} = this.props
        return (
            <div className="item" style={{border:num===0?"":"solid 2px green"}}>
                <h1>{type}</h1>
                <p style={{fontSize:"24px"}}>{money}</p>
                {num!==0&&<span>{num}</span>}
                <button onClick={this.add.bind(this,"+",id)}>+</button>
                {num!==0&&<button onClick={this.add.bind(this,"-",id)}>-</button>}
            </div>
        )
    }
}
let mapStateToProps=(state)=>{
    return{
        cardList:state.allReducer
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        changeNum:(number)=>{
            dispatch({type:"CHANGE",number})
        }
    }
}
item=connect(mapStateToProps,mapDispatchToProps)(item)
export default item;