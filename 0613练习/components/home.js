import React, { Component } from 'react'
import "./home.css"
import Left from "./left"
import Right from "./right"
export default class home extends Component {
    constructor(props){
        super(props);
        this.state={
            code:0,
            left:["热门","鲜花","实物"],
            right:[
                {
                    id:0,
                    title:"热门的介绍",
                    img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4236023685,2472818546&fm=27&gp=0.jpg"
                },
                {
                    id: 1,
                    title: "鲜花的介绍",
                    img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4081007141,4005221342&fm=27&gp=0.jpg"
                },
                {
                    id: 2,
                    title: "实物的介绍",
                    img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3409605815,553104213&fm=27&gp=0.jpg"
                },
            ]
        }
    }
    dianji(ind){
        this.setState({
            code:ind
        })
    }
    render() {
        let { left,right,code}=this.state
        return (
            <div className="home">
            <div className="left">
            {left.map((item,index)=>{
                    return <Left key={index}
                     item={item}
                      code={this.state.code}
                       ind={index}
                        dianji={this.dianji.bind(this,index)}/>
                })}
            </div>
                <div className="right">
                   <Right list={right[code]}/>
                </div>
            </div>
        )
    }
}
