import React, { Component } from 'react'
import "../css/list.css"
import { NavLink } from "react-router-dom"
import RouteView from "../route/routeview"
import {request} from "../api/index"
import {connect} from "react-redux"
class list extends Component {
    componentDidMount() {
        this.props.savealldata(request)
        
    }
    
    render() {
        return (
            <div className="list">
                <div className="l_c">
                    <RouteView routes={this.props.children}/>
                </div>
                <div className="l_f">
                    <NavLink to="/list/shop" activeClassName="active">购物车</NavLink>
                    <NavLink to="/list/look">查看</NavLink>
                    <NavLink to="/list/my">我的</NavLink>
                </div>
            </div>
        )
    }
    
}
let mapStateToProps=(state)=>{
    return{}
}
let mapDispatchToProps=(dispatch)=>{
    return{
        savealldata:(fn)=>{
            dispatch(fn)
        }
    }
}
list=connect(mapStateToProps,mapDispatchToProps)(list)
export default  list;
