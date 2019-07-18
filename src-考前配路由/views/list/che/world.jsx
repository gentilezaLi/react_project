import React, { Component } from 'react'

export default class che extends Component {
    
    render() {
        
        console.log(this.props.location.state.list)
        console.log(this.props.location.state.cor)
        return (
            <div>
               world
            </div>
        )
    }
}
