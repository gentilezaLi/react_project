import React, { Component } from 'react'
import Ite from "./ite"
export default class children extends Component {
    constructor(props){
        super(props);
        this.state={
            num:null,
            code:1,
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.list.length !== this.props.list.length || nextState.num!==this.state.num
    }
    dianji(ind){
        // console.log(ind)
        this.setState({
            code:ind
        })
    }
    render() {
        return (
            <div>
                {this.state.num&&<p style={{background:"red",color:"white"}}>更新了{this.state.num}条数据</p>}
                
               {
                   this.props.list.map((item,index)=>{
                      return <Ite key={index} {...item} ind={index} code={this.state.code} dianji={this.dianji.bind(this,index)}/>
                   })
               }
            </div>
        )
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        if (prevProps.list.length !== this.props.list.length){
            return Math.abs(prevProps.list.length-this.props.list.length)
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState,snapshot){
        
        if (snapshot){
            this.setState({
                num: snapshot
            });
            setTimeout(()=>{
                this.setState({
                    num:null
                })
            },2000)
        }
        
    }
}
