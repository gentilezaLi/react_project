import React, { Component } from 'react'

export default class index2 extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
              {this.props.data}
            </div>
        )
    }
}
