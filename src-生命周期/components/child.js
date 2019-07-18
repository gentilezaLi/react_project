import React, { Component } from 'react'

export default class child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"hello"
        };
        this.childUpdate = this.childUpdate.bind(this)
    }

    childUpdate(){
        this.setState({
            name:"hello"
        })
    }


    render() {
        console.log("子组件render")
        return (
            <div>
                <button onClick={this.childUpdate}>子组件 点击</button>
            </div>
        )
    }
    //-------------更新--------------
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate")
        return nextProps.userId!==this.props.userId|| nextState.name!==this.state.name
    }
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
}
