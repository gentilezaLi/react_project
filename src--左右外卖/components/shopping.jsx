import React, { Component } from 'react'
import "./css/shopping.css"
export default class menu extends Component {
    render() {
        return (
            <div className="shopping"> 
                <div className="shang">
                    <h4>清单</h4>
                    <p className="pp">宫保鸡丁<span>25</span><b><span>-</span><b>1</b><span>+</span></b></p>
                    <p className="ppp">合计：￥<span>25</span>元</p>
                </div>
                <div className="xia">
                    <h4>联系方式</h4>
                    <div className="mm">
                        <p>姓名 <input type="text"/></p>
                        <p>电话 <input type="text"/></p>
                        <p>地址 <input type="text"/></p>
                    </div>
                    <div className="btn">
                   <span></span> <span>清空购物车</span><span>下单</span>
                </div> 
                </div>
               
            </div>
        )
    }
}
