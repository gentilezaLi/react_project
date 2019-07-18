import React, { Component } from 'react'
import List from "./views/list"
import "./App.css"
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <List/>
      </div>
    )
  }
}
