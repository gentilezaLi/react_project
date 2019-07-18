import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import RouterView from "../route/routeview"
import "../css/list.css"
import {connect} from "react-redux"
import getData from "../api/index"
 class list extends Component {
     componentDidMount() {
         this.props.saveAllData(getData)
     }
     
    render() {
        return (
            <div className="list">
                <div className="l_c">
                    <RouterView routes={this.props.children}/>
                </div>
                <div className="l_f">
                    <NavLink to="/list/che">购物车</NavLink>
                    <NavLink to="/list/look">查看</NavLink>
                    <NavLink to="/list/my">我的</NavLink>
                </div>
            </div>
        )
    }
}
let mapStateToProps=(state)=>{
    return{
        
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        saveAllData:(fn)=>{
            dispatch(fn)
        }
    }
}
list=connect(mapStateToProps,mapDispatchToProps)(list)
export default list;