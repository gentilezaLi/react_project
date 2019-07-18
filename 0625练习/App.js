import React, { Component } from 'react'

import {connect} from "react-redux"
 class App extends Component {
   constructor(props){
     super(props);
     this.state={
       list:[
         {
           id:1,
           name:"王小虎"
         },
         {
          id:2,
          name:"王大虎"
        }
       ]
     }
   }
    render() {
        return ( 
          <div>
            {this.state.list.map((item,index)=>{
              return <p key={index}>{item.id}{item.name}</p>
            })}
          </div>
        )
    }
    componentDidMount() {
      // this.props.saveAsyncData(this.state.list)
      console.log(this.props)
    }
    
}
let mapStateToProps=(state)=>{
  return {
    list:state.guanReducer
  }
}
let mapDispatchToProps=(dispatch)=>{
  return {
    saveAsyncData:(obj)=>{
      dispatch({type:"LIST",obj})
    }
  }
}
App=connect(mapStateToProps,mapDispatchToProps)(App)
export default App;