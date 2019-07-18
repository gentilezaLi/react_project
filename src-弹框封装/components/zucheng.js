import React, { Component } from 'react'
import "./zucheng.css"
import propsTypes from "prop-types"
export default class zucheng extends Component {
    render() {
        let {styleCss,header,con,footer,type}=this.props
        return (
            <div className="zucheng">
                <div className="box">
                    <div>{header}</div>
                    <hr/>
                    {type === 1 && <div>{con}</div>}
                    {type === 2 && <input placeholder={con}/>}
                    {type === 3 && <img src={con} alt="" />}
                    
                    <hr/>
                    {footer === 1 && <button onClick={this.props.sure}>确定</button>}
                    {footer === 2 && <div><button onClick={this.props.cancel}>取消</button>
                    <button onClick={this.props.sure}>确定</button></div>}

                </div>
            </div>
        )
    }
}
zucheng.propsTypes={
    type:propsTypes.oneOf([1,2])
}