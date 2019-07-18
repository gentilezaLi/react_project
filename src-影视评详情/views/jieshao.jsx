import React, { Component } from 'react'
import {connect} from "react-redux"
import "../css/jie.css"
class jieshao extends Component {
    render() {
        console.log(this.props.list.urls)
        return (
            <div className="jie">
                <div dangerouslySetInnerHTML={{__html: this.props.list.content}}></div>
            </div>
        )
    }
}
let mapStateToProps=(state)=>{
    return {
        list:state.FuYinReducer
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {}
}
jieshao=connect(mapStateToProps,mapDispatchToProps)(jieshao)
export default  jieshao;
