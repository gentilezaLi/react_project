import React, { Component } from 'react'
import "./css/small.css"
import store from "../store/stroe"
export default class small extends Component {
    render() {
        return (
            <div className='rightItem'>
                <div className='left'>
                    <img src={this.props.littleImageUrl} alt=''/>
                </div>
                <div className='right'>
                    <h4>{this.props.spuName}</h4>
                    <p>{this.props.spuDesc}</p>
                    <span>已售：12346</span>
                    <span className="price">￥{this.props.currentPrice}</span>
                    <div className='number'>
                        <span className="jia" onClick={()=>{
                            store.dispatch({type:"JIA",data:{cur:this.props.activityPolicy.discountByCount.count}})
                        }}>+</span>
                        {
                            this.props.activityPolicy.discountByCount.count!==0&&
                            <span>{this.props.activityPolicy.discountByCount.count}</span>
                        }
                        {
                            this.props.activityPolicy.discountByCount.count!==0&&
                            <span className="jian">-</span>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
