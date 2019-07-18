import React, { Component } from 'react'

export default class list extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"hello"
        }
    }
    render() {
        let {title} =this.state
        return (
            <div>
                <p>{title}</p>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.refs)
        console.log(this)
    }
}
