import React, { Component } from 'react'

export default class right extends Component {
    render() {
        return (
            <div>
                <p>{this.props.list.title}</p>
                <img src={this.props.list.img} alt="" style={{width:"200px"}}/>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.list)
    }
}
