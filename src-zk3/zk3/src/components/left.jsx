import React, { Component } from 'react'

export default class left extends Component {
    render() {
        return (
            <div>
                {this.props.list.map((item,index)=>{
                        return <p key={index} 
                            onClick={this.eve.bind(this,index)}
                            className={this.props.ind===index?"act":""}
                        >{item.title}</p>
                    })}
            </div>
        )
    }
}
