import React, { Component } from 'react'
import Xishoujian from "./xishoujian"
import Chufang from "./chufang"
export default class watcherInsTance extends Component {
    render() {
        return (
            <div>
                <Xishoujian/>
                <hr/>
                <Chufang/>
            </div>
        )
    }
}
