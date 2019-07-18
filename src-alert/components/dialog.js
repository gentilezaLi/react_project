import React, { Component } from 'react'

export default class dialog extends Component {
    constructor(props){
        super(props);
        this.state={
            type:null
        }
    }
    render() {
        let { type } = this.props
        return (
            <div>
                <div>头</div>
                <div>
                    {
                        type==1?<div>alert</div>:
                        (type==2?<div>confirm</div>:<div>prompt</div>)
                    }
                </div>
                <div>尾</div>
            </div>
        )
    }
}
