import React, { Component } from 'react'
import "./list.css"
export default class list extends Component {
    render() {
        let {img,name,text,iszan,time}=this.props
        return (
            <div className="ite">
                <div>
                    <img src={img} alt=""/>
                </div>
                <div>
                    <p>姓名：{name}</p>
                    <p>内容：{text}</p>
                    <p>{time}</p>
                </div>
                <div className="btn"
                    className={iszan?'btn':'btn1'}
                    onClick={this.props.onhandle}>{iszan ? '♡' :'♥'}</div>
            </div>
        )
    }
}
