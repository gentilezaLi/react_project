import React, { Component } from 'react'

export default class son extends Component {
    state={
        flag:false
    }

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.mimi !== this.props.mimi || nextState.flag!==this.state.flag
    }

    render() {
        return (
            <div>
                {this.state.flag && <h2 style={{ backgroundColor: "red" }}>点击了</h2>}
                 <h1>{this.props.mimi}</h1>
            </div>
        )
    }
    
    getSnapshotBeforeUpdate(prevProps,prevState){
        return prevProps.mimi !== this.props.mimi
    }
    componentDidUpdate(prevProps, prevState,snapshot){

        console.log(snapshot)

        if (snapshot){
            this.setState({
                flag:true
            })

            setTimeout(()=>{
                this.setState({
                    flag: false,
                })
            },2000)
            
        }
    }
}
