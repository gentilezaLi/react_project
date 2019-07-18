import React, { Component } from 'react'
import {connect} from "react-redux"
import "../css/shi.css"
import axios from "axios"
class shiping extends Component {
    
    
    eve(urlid){
        axios.get(`http://api.cnfuyin.net/api/url/index?movid=2596&urlid=${urlid}&app=fytv&device=android&version=3.0.2`).then(res=>{
            console.log(res.data)
            this.props.savevideo({type:"CUNVIDEO",dan:res.data})
        })  
        this.props.saveNum(1)
    }
    render() {
        // console.log(this.props.list.urls)
        return (
            <div className="shi">
                {this.props.list.urls&&this.props.list.urls.map((item,index)=>{
                    return <span key={index} onClick={this.eve.bind(this,item.urlid)
                    }>{item.sort_title}
                    </span>
                })}
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
    return {
        savevideo:(fn)=>{
            dispatch(fn)
        },
        saveNum:(num)=>{
            dispatch({type:"NUM",num})
        }
    }
}
shiping=connect(mapStateToProps,mapDispatchToProps)(shiping)
export default  shiping;
