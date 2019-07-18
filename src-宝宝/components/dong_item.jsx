import React, { Component } from 'react'
import "../css/dong_item.css"
import {withRouter} from "react-router-dom"
 class dong_item extends Component {
    
    render() {
        let {name,pic,score,tracks,ind}=this.props
        return (
            <div className="dong_item">
                    <div>
                        <img src={pic} alt=""/>
                        <span>{score}分</span>
                    </div>
                    <div>
                        <p>{ind+1}.{name}</p>
                        <p>共{tracks}集</p>
                    </div>
            </div>
        )
    }
    
}
dong_item=withRouter(dong_item)
export default dong_item;
