import React, { Component } from 'react'
import axios from "axios"
export default class music_detail extends Component {
    constructor(props){
        super(props);
        this.state={
            list:""
        }
    }
    render() {
        let {list}=this.state
        return (
            <div>
                <ul>
                    {list}
                </ul>
                <audio src={this.props.location.state} controls autoPlay></audio>
            </div>
        )
    }
    componentDidMount() {
        axios.get("/api/baby/bb.php?type=getlyric&rid="+this.props.match.params.id).then(res=>{
            console.log(res.data)
            let list=res.data.split('').map((item,index)=>{
                if(item==="["){
                    return <br key={index}/>
                }
                if(/[\u4e00-\u9fa5]/.test(item)){
                    return item
                }
            })
            this.setState({
                list
            })
        })
    }
}
