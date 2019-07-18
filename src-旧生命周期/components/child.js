import React, { Component } from 'react'

export default class child extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"hello"
        }
        // this.childdianjia = this.childdianjia.bind(this)
    }
    childdianjia(){
        this.setState({
            name:"hell"
        })
    }
    render() {
        console.log("子组件render")
        return (
            <div>
                <button onClick={this.childdianjia.bind(this)}>子组件的点击</button>               
            </div>
        )
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate")
        // return nextState.name!==this.state.name
        return nextProps.user !== this.props.user || nextState.name !== this.state.name
    }
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
}
