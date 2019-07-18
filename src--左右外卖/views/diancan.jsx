import React, { Component } from 'react'
import axios from "axios"
import "../css/dian.css"
import Title from "../components/title"
import store from "../store/stroe"

export class diancan extends Component {
    constructor(props){
        super(props);
        this.myRef=React.createRef()
        this.state={
            leftList:[],
            ind:0,
            scrollTop:[],
            scrollNum:0,
            count:0
        }
    }
    async leftclick(index){
        let arr=[...this.myRef.current.children]
        console.log(arr)
        arr.map((item,index)=>{
            this.state.scrollTop.push(this.state.scrollNum)
            this.state.scrollNum+=item.scrollHeight
        })
        // console.log(this.state.scrollTop)
        // console.log(this.state.scrollNum)
        await this.setState({
            ind:index,
            scrollTop:this.state.scrollTop.slice(0,11)
        })
        this.myRef.current.scrollTop=this.state.scrollTop[index]
    }

    gun(e){
        let arr=[...this.myRef.current.children]
        arr.map((item,index)=>{
            this.state.scrollTop.push(this.state.scrollNum)
            this.state.scrollNum+=item.scrollHeight
        })
        this.state.scrollTop.map((ite,i)=>{
            if(e.target.scrollTop>=ite){
                this.setState({
                    ind:i
                })
            }
        })


    }
    
    
    render() {
        let {leftList}=this.state
        // console.log(children)
        return (
            <div className="dian">
                <div className="d_l">
                    {leftList.map((item,index)=>{
                            return <p className={index===this.state.ind?'act':''} key={index}
                                 onClick={this.leftclick.bind(this,index)}
                            >{item.categoryName}
                            {this.state.count!==0&&<span>{this.state.count}</span>}
                            
                            </p> 
                    })}
                </div>
                <div className="d_r" ref={this.myRef} onScroll={this.gun.bind(this)}>
                {leftList.map((item,index)=>{
                            return <Title key={index} {...item} />
                                
                    })}
                </div>
                
            </div>
        )
    }
    componentDidMount() {
        axios.get("/api/list").then(res=>{
            console.log(res.data.categoryList)
            this.setState({
                leftList:res.data.categoryList
            })
        })


        store.subscribe(()=>{
            this.setState({
                count:store.getState().count_jia.cur+1
            })
        })
        
    }
  
}

export default diancan
