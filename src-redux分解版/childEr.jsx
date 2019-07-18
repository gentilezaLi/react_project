import React, { Component } from 'react'
import store, {} from "./store/store"
export default class childEr extends Component {
    constructor(props){
        super(props);
        this.state={
            reducer:{}
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                reducer:store.getState()
            })
        })
    }
    render() {
        let {reducer}=this.state
        console.log(reducer)
        return (
            <div>
                {
                    reducer.userReducer&&
                    <div>
                        <h1>{reducer.userReducer.name}</h1>
                        <h1>{reducer.userReducer.sex}</h1>
                    </div>
                    
                }

                <button onClick={()=>{
                    store.dispatch({type:"ADD_LIST",data:[1,2,3,4,5,6]})
                }}>添加列表</button>
                <input type="date"/>
                
            </div>
        )
    }
}
