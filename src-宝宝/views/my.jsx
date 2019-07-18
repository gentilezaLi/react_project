import React, { Component } from 'react'
import "../css/my.css"
export default class see extends Component {
    render() {
        return (
            <div>
                <div className="header">我的</div>
                <main className="My-main">
                    <div><span>我的下载</span><i className="iconfont icon-youjiantou-01"></i></div>
                    <div><span>我的收藏</span><i className="iconfont icon-youjiantou-01"></i></div>
                    <div>清除缓存</div>
                    <div>关于我们</div>
                    <div><span>退出应用</span></div>
                </main>
            </div>
        )
    }
}
