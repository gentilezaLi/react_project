import React, { Component } from 'react'
import "./css/jieshao.css"
export default class jieshao extends Component {
    render() {
        //解构 this.props穿过来的参数
        let { price, title, pingjia, shangjia } = this.props
        return (
            <div className="jieshao">
                <p>{price}</p>
                <p>{title}</p>
                <p>{pingjia}</p>
                <p>{shangjia}</p>
            </div>
        )
    }
}
