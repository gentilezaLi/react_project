import React from "react"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "ul",
      props: {
        id: "list"
      },
      children: [
        { type: "li", props: { className: "item" }, children: ["Item 1"] },
        { type: "li", props: { className: "item" }, children: ["Item 2"] },
        { type: "li", props: { className: "item" }, children: ["Item 3"] }
      ]
    }
  }
  render(){
    return <ul>
      {this.state.children.map((item,index)=>{
        return <li key={index}>{item.children}</li>
      })}
    </ul>
  }
}
export default App;