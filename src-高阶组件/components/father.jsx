import React, { Component } from 'react'
import Child from "./child"
export class father extends Component {
    render() {
        return (
            <div>
                <Child color="red"/>
                <Child color="yellow"/>
                <Child color=""/>
                <Child color="blue"/>
                <Child color="pink"/>
            </div>
        )
    }
}

export default father
