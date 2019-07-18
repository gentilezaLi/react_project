import React from "react";
class App extends React.Component {
  //构造
  constructor(props) {
    super(props);
    //存放数据
    this.state = {
      name: "韩老师",
      age: "93年的",
      likeList: ["吃fan", "喝shui", "tao票票", "赌qian", "抽yan"]
    }
  }

  //生成虚拟dom
  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <div>{this.state.age}</div>
        <ul>
          {this.state.likeList.map((item,index)=><li key={index} onClick={this.eve.bind(this,item,index)}>{item}</li>)}
        </ul>
      </div>
    )
  }

  eve(ite,ind){
    // console.log(this)
    console.log(ite)
    console.log(ind)
    // this.state.likeList[ind]="水果"

    let newLike = this.state.likeList
    newLike[ind]="hello word"
    this.setState({
      likeList: newLike
    })
    
  }
}
//导出
export default App;
























// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;