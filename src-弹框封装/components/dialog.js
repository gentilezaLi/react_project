import React, { Component } from 'react'
import Zucheng from "./zucheng"
export default class dialog extends Component {
    constructor(props){
        super(props);
        this.state={
            flag:false,
            content:{
                styleCss:{},
                header:'suhduahs',
                con:'sds ',
                footer:2,
                type:2
            }
        }
    }
    sure(){
        this.setState({
            flag:false
        })
    }
    cancel(){
        this.setState({
            flag: false
        })
    }
    render() {
        return (
            <div className="dialog">
                <button onClick={()=>this.setState({
                        flag:true
                    })
                }>点击</button>

                {this.state.flag && <Zucheng {...this.state.content}
                 sure={this.sure.bind(this)}
                 cancel={this.cancel.bind(this)}
                />}
            </div>
        )
    }
}
