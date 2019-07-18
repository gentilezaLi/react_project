import React, { Component } from 'react'
import "../css/wold.css"
import {connect} from "react-redux"

 class wold extends Component {
     componentDidMount() {
         console.log(this.props.match.params.id)
     }
     
    changeId(e){
        console.log(e.target.innerHTML)
        let list=this.props.list
        list[0].questions[this.props.match.params.id].userAnswer=e.target.innerHTML
        this.props.cunAnswer(list)
        // console.log(this.props.match.params.id*1+1,list&&list[0].questions.length)
        if(list){
            if(this.props.match.params.id*1+1>=list[0].questions.length){
                alert("已经是最后一道题了")
                return 
            }
            this.props.history.replace("/list/shop/wold/"+(this.props.match.params.id*1+1))
        }
        
       
        
    }
     
    render() {
        let list =this.props.list[0]
        let {id}=this.props.match.params
        
        // console.log(list,"取出来第一条数据")
        // console.log(this.props.match.params.id*1+1,list.questions.length)

        return (
            <div className="wold">
                <div className="we_f">{list&&list.title}</div>
                <div className="w_c">
                    <div className="w_c_1">{id*1+1}/{list&&list.questions.length}</div>
                    <div className="w_c_2">
                        <div dangerouslySetInnerHTML={{__html:list&&list.questions[id].title}}></div>
                        <div>
                            {list&&list.questions[id].questionChoices.map((item,index)=>{
                                return <li key={item.id} > 
                                        <b onClick={this.changeId.bind(this)}
                                    style={{background:list&&list.questions[id].userAnswer===item.order.toUpperCase()?'purple':''}}                                       
                                        >{ item.order.toUpperCase()}</b> 
                                        <i>{item.content}</i>
                                        </li>
                            })}
                        </div>
                    </div>
                    <div onClick={()=>{
                        this.props.history.push("/list/my")
                    }}>查看情况</div>
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
        cunAnswer:(list)=>{
            dispatch({type: "ALLDATA", list} )
        }
    }
}
wold=connect(mapStateToProps,mapDispatchToProps)(wold)
export default  wold;
