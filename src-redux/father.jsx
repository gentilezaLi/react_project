import React, { Component } from 'react'
import Childda from "./childda"
import Childer from "./childer"
export default class father extends Component {
    render() {
        return (
            <div> 
                <Childer/>
                <Childda/>
               
            </div>
        )
    }
}
