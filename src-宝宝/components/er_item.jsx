import React, { Component } from 'react'
import "../css/er_item.css"
import "../fonts/iconfont.css"
import {withRouter} from "react-router-dom"
 class er_item extends Component {

    eve(){
        console.log(this.props)
        this.props.history.push("/detail",this.props.downurl)
    }

    render() {
        let {name,artist,playcnt,pic,ind}=this.props
        
        return (
            <div className="er_item">
                <div>
                  <img src={pic} alt="" onClick={this.eve.bind(this)}/>
                </div>
                <div>
                    <p>{ind+1}.{name}</p>
                    <p>{artist}   播放：{playcnt}</p>
                </div>
                <div>
                    <span className="iconfont icon-fenxiang4"></span>
                </div>
            </div>
        )
    }
    
}
//高阶组件
    er_item=withRouter(er_item)

    export default  er_item;