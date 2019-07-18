import React, { Component } from 'react'
import {connect} from "react-redux"
import "../css/my.css"
 class my extends Component {
    componentDidMount() {
        let user = localStorage.getItem("token")
        if (!user) {
            this.props.history.push("/login")
        }
       
    }
    render() {
        let list=this.props.list[0]
        console.log(list,"haha")
        return (
            <div className="my">
                我是登录成功之后的界面
                <div className="m_h">
                    得分({list&&list.questions.filter(item=>item.answer===item.userAnswer).length})
                </div>
                <div className="m_c">
                    <div>{list&&list.title}</div>
                    <div className="ite">
                        {list&&list.questions.map((item,index)=>{
                            return <span key={index}
                            style={{background:item.answer===item.userAnswer?'blue':'red'}}
                                onClick={()=>{
                                    this.props.history.push("/list/shop/wold/"+index)
                                    // console.log(item.answer.length,item.userAnswer.length)
                                }}
                                
                            >{index+1}{item.answer}({item.userAnswer})</span>
                        })}
                    </div>
                </div>
            </div>
        )
    }
   

}

let mapStateToProps=(state)=>{
    return{
        list:state.allreducer
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        
    }
}
my=connect(mapStateToProps,mapDispatchToProps)(my)
export default  my;
