import React, { Component } from 'react'
import Img from "./img"   //图片组件
import Jianshao from "./jieshao" //中间介绍组件
import Gowuche from "./gowuche" //下方购物车组件
import "./css/list.css"
export default class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 数据
            list: [
                {
                    img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2153937626,1074119156&fm=27&gp=0.jpg",
                    price: "￥118.00",
                    title: "泰康（CONTEC）CMS50DL 脉搏血氧仪",
                    pingjia: "已有1700+人评价",
                    shangjia: "CONTC京东自营"
                },
                {
                    img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg",
                    price: "￥149.00",
                    title: "泰康（CONTEC）CMS50DL 脉搏血氧仪",
                    pingjia: "已有1700+人评价",
                    shangjia: "CONTC京东自营"
                },
                {
                    img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2363037083,4182949652&fm=27&gp=0.jpg",
                    price: "￥199.00",
                    title: "泰康（CONTEC）CMS50DL 脉搏血氧仪",
                    pingjia: "已有1700+人评价",
                    shangjia: "CONTC京东自营"
                },
                {
                    img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3409605815,553104213&fm=27&gp=0.jpg",
                    price: "￥199.00",
                    title: "泰康（CONTEC）CMS50DL 脉搏血氧仪",
                    pingjia: "已有1700+人评价",
                    shangjia: "CONTC京东自营"
                }
            ]
        }
    }
    render() {
        //解构list
        let { list } = this.state
        return (
            <div className="list">
                {list.map((item, index) => {
                    return <div className="ite" key={index}>
                       <Img {...item} />
                        <Jianshao  {...item} />
                       <Gowuche />
                    </div>
                })}

            </div>
        )
    }
}
