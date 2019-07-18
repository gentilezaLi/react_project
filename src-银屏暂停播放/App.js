import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.refAudio=React.createRef()
  }
  render() {
    return (
      <div>
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" ref={this.refAudio}></audio>
        <button onClick={()=>{
          let oAutio = this.refAudio.current
          oAutio.play()
        }}>播放</button>
        <button onClick={()=>{
          let oAutio = this.refAudio.current
          oAutio.pause()
        }}>暂停</button>
      </div>
    )
  }
}
