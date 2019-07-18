import React, { Component } from 'react'
import {connect} from "react-redux"
import request from "./api/request"
import "./css/home.css"
import {BrowserRouter as Router,NavLink} from "react-router-dom"
import RouterView from "./route/routeview"
import {routes} from "./route/router_config"
class home extends Component {
    componentDidMount() {
        this.props.saveAsync(request)
    }
    //点击已收藏
    collect(){
        console.log(this.props.collect,"收藏了")
        this.props.saveCollect(this.props.dan)
    }
    render() {
        console.log(this.props.num,"7777777777")
        return (
            <Router>
            <div className="home">
                <div className="header">
                    <h3>{this.props.list.title}</h3>
                </div>
                <div className="vid">
                    <h3>{this.props.dan.title}</h3>
                    {this.props.num==1?<video src={this.props.dan.url_1} width="375" height="200" controls autoPlay></video>:""}
                    {this.props.num==2?<audio src={this.props.dan.url_5} width="375" height="200" controls autoPlay></audio>:""}
                </div>
                <div className="haha">
                        <span onClick={this.collect.bind(this)}>收藏</span>
                        <span>下载</span>
                        <span>分享</span>
                        <span>笔记</span>
                </div>
                <div className="con1">
                        <NavLink to="/jie" activeClassName="active">介绍</NavLink>
                        <NavLink to="/shi">视屏</NavLink>
                        <NavLink to="/ying">音频</NavLink>
                </div>
                <div className="main">
                    {/* <button onClick={()=>{
                    this.props.saveAsync(request)
                }}>异步请求数据</button> */}
                
                {/* //出口 */}
                  <RouterView routes={routes}/>
                    
                </div>
                {/* <div dangerouslySetInnerHTML={{__html: this.props.list.content}} /> */}
            </div>
            </Router>
        )
    }
}
let mapStateToProps=(state)=>{
    return {
        list:state.FuYinReducer,
        dan:state.CunvideoReducer,
        collect:state.collectReducer,
        num:state.numReducer

    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        saveAsync:(fn)=>{
            dispatch(fn)
        },
        saveCollect:(obj)=>{
            dispatch({type:"COLLECT",obj})
        }
    }
}
home=connect(mapStateToProps,mapDispatchToProps)(home)
export default home;
