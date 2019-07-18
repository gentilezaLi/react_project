import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import "../css/listener.css"
 class listen_Item extends Component {
    eveve(){
        console.log(this.props)
        this.props.history.push("/music/"+this.props.id,this.props.downurl)
    }
    render() {
        let {ind,artist,name,playcnt}=this.props
        return (
            <div className="ite" onClick={this.eveve.bind(this)}>
                <div>{ind+1}</div>
                <div>
                    <p>{name}</p>
                    <p>{artist} 播放量：{playcnt}</p>
                </div>
            </div>
        )
    }
}
listen_Item=withRouter(listen_Item)
export default listen_Item;
