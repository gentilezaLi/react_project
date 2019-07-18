
import React from "react"
import List from "./components/index"
import List2 from "./components/index2"
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:"hello reactjs"
    }
  }
  render(){
    let {data} =this.state
    return(
      <div>
      <div>{data}</div>
        <List/>
        <List2 {...data}/>
      </div>
    )
  }
}
export default App;