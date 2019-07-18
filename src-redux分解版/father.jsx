import React, { Component } from 'react'
import ChildDa from "./childDa"
import ChildEr from "./childEr"
export default class father extends Component {
    render() {
        return (
            <div>
                <ChildDa/>
                <ChildEr/>
            </div>
        )
    }
}
