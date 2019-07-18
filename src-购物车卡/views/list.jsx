import React, { Component,Suspense } from 'react'
import "../css/list.css"
import {connect} from "react-redux"
import {getCard} from "../api/index"

let Item=React.lazy(()=>import("../components/item"))

// import Item from "../components/item"

class list extends Component {
    constructor(props){
        super(props);
        this.state={
             code:0,
            colorList:["red","purple","skyblue","gold","pink"],
            zongNum:0,
            zongMoney:0,
           
        }
    }
    componentDidMount() {
        this.props.saveData(getCard)
    }
    
    render() {
        let {colorList,zongNum,zongMoney,code}=this.state
        this.props.cardList.forEach((item,index)=>{
            zongNum+=item.num*1
            zongMoney+=item.num*item.money*1
        })
        return (
            
            <div className="list">
                <div className="header">
                    <div className="box">
                        {colorList.map((item,index)=>{
                            return <span key={index}
                             style={{background:item,border:code==index+1?"solid 3px black":""}}
                            onClick={()=>this.setState({code:index+1})}
                             ></span>
                        })}
                    </div>
                </div>
                <div className="main">
                    <Suspense fallback={<div>Loading</div>}>
                       {this.props.cardList.map((item,index)=>{
                        return <Item key={index} {...item}/>
                    })} 
                    </Suspense>
                    
                </div>
                <div className="footer">
                    <span>总价({zongMoney})</span>
                    <span>总份数({zongNum})</span>
                    <span onClick={()=>{
                        this.props.history.push("/detail",{color:code===0?"white":colorList[code-1],data:this.props.cardList.filter(item=>item.num!==0)})
                    }}>购买</span>
                </div>
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
        saveData:(fn)=>{
            dispatch(fn)
        }
    }
}
list=connect(mapStateToProps,mapDispatchToProps)(list)
export default list;
