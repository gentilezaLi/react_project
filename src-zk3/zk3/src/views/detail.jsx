import React, { Component } from 'react'

export default class detail extends Component {
    render() {
        return (
            <div>
                <div onClick={()=>{
                    this.props.history.go(-1)
                }}>{this.props.location.state}</div>
            </div>
        )
    }
}
