import React, { Component } from 'react'
import {connect} from "react-redux"
import "../css/hello.css"
 class hello extends Component {
    render() {
        let list =this.props.list[0]
        return (
            <div className="hello">
                <div className="he_f">{list&&list.title}</div>
                <div className="h_c">
                        <span onClick={()=>{
                            this.props.history.push("/list/shop/wold/0")
                        }}>点击答题</span>
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
hello=connect(mapStateToProps,mapDispatchToProps)(hello)
export default  hello;
