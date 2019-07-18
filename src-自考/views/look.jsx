import React, { Component } from 'react'
import {connect} from "react-redux"
import "../css/look.css"
class look extends Component {
    componentDidMount() {
        let data=this.props.list
        data=data[0].questions.filter(item=>item.userAnswer===item.answer)
        this.props.fenshu(data)
    }
    render() {
        console.log(this.props.list[0].questions)
        return (
            <div className="look">
                 <div className="l_h">
                    <span onClick={()=>{
                        this.props.history.push("/list")
                    }}>返回</span>
                    <span></span>
                    <span>答题卡</span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <div className=".l_con">
                    <p>{this.props.list[0].title}</p>
                    <div className="card">
                      {this.props.list[0].questions.map((item,index)=>{
                        
                    return <span key={index}
                        style={{background:item.userAnswer===item.answer?'blue':'red'}}
                        onClick={()=>{
                            this.props.history.push("/answer/"+index)
                        }}
                    >{index+1}{item.answer}</span>
                })}  
                    </div>
                </div>
                
            </div>
        )
    }
}
let mapStateToProps=(state)=>{
    return{
        list:state.alldataReducer
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        fenshu:(list)=>{
            dispatch({ type: "FENSHU", list })
        }
    }
}
look=connect(mapStateToProps,mapDispatchToProps)(look)
export default look;

