import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { request } from "../api/index"
import axios from "axios"

class list extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        request().then(res => {
            console.log(res)
        })


        let user = localStorage.getItem("token")
        if (!user) {
            this.props.history.push("/login")
        }

        // axios.get("/api/rikao").then(res => {
        //     // console.log(res.data)
        //     let list = res.data.list
        //     this.setState({
        //         list
        //     })

        // })

    }

    render() {

        return (
            <div>
                {/* {this.state.list.map((item,index)=>{
                   return <div key={index}>
                   <span>{item.id}</span>
                   <span>{item.name}</span>
                   <span>{item.num}</span>
               </div>
               })} */}
            </div>
        )
    }
}
list = withRouter(list)
export default list;
