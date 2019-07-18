import React, { Component } from 'react'
import Home from "./home"
import store from "./store/store"
import {Provider} from "react-redux"
export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Home/>
        </Provider>
      </div>
    )
  }
}
