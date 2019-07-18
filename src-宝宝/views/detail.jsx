import React, { Component } from 'react'

export default class detail extends Component {
    render() {
        console.log(this.props,"-------")
        return (
            <div>
              <video width="375" height="240" src={this.props.location.state} autoPlay controls/>
            </div>
        )
    }
    componentWillMount() {
        //判断本地存储中有无
        
        if(localStorage.getItem("toking")){

        }else{
            this.props.history.replace("/login")
        }
    }
}
