import React, { Component } from 'react'
import "./App.css"
import List from "./components/list"
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <List/>
      </div>
    )
  }
}
