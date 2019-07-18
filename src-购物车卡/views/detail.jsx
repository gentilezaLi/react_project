import React, { Component } from 'react'

export default class detail extends Component {
    render() {
        console.log(this.props.location.state.color)
        return (
            <div>
                <div onClick={()=>{
                    this.props.history.push("/list")
                }}>返回</div>
                <hr/>
                <div>
                    {this.props.location.state.data.map((item,index)=>{
                        return <p key={index} style={{background:this.props.location.state.color,marginTop:"10px"}}>{item.type},{item.num}</p>
                    })}
                </div>
            </div>
        )
    }
}
