import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import List from "./views/list"
export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <List/>
                </Router>
            </div>
            )
        }
}