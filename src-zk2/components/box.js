import React, { Component } from 'react'
import "./box.css"

export default class box extends Component {
    constructor(props){
        super(props);
        this.state={
            top:100,
            left:100
        }
    }
    eve(e){
        let {hs,onMove}=this.props
        let disX=e.clientX-e.target.offsetLeft
        let disY=e.clientY-e.target.offsetTop
        document.onmousemove=(ev)=>{
            // console.log(123)
            let left =ev.clientX-disX
            let top=ev.clientY-disY
            this.setState({
                left,
                top
            })
           
        }
        document.onmouseup=function(){
            document.onmousemove=null
            document.onmouseup=null
        }
    }
    render() {
        let {hs}=this.props
        let {top,left} =this.state
        return (
            <div className="box">
                <div style={{
                    width:"100px",
                    height:"100px",
                    background:"red",
                    position:"absolute",
                    top,
                    left
                }} 
                    onMouseDown={this.eve.bind(this)}
                >top:{top} <br/>left:{left}
                </div>


                {hs===1&&
                <div className="box1"
                >
                    <div className="mask1" style={{left:this.props.num/100*180+"px"}} onMouseDown={this.eveve.bind(this)}></div>
                </div>
                }


                {hs===2&&
                <div className="box2">
                    <div className="mask2" style={{top:this.props.num/100*180+"px"}} onMouseDown={this.eveve.bind(this)}></div>
                </div>
                }
            </div>
        )
    }

    eveve(e){
        let {onMove,hs}=this.props
        let disX=e.clientX-e.target.offsetLeft
        let disY=e.clientY-e.target.offsetTop
        document.onmousemove=function(e){
            let left=e.clientX-disX
            let top=e.clientY-disY
            left=left<0?0:left
            left=left>200?200:left
            top=top<0?0:top
            top=top>200?200:top
            if(hs===1){
                 onMove(left/2)
            }else{
                onMove(top/2)
            }
        }
        document.onmouseup=function(){
            document.onmousemove=null
            document.onmouseup=null
        }
    }
    
}
