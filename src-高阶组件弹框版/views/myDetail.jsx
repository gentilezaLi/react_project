import React, { Component } from 'react'
import Lanjie from "../hoc/lanjie"
import CreatModel from "../hoc/Cover"
function Wrap(props){
    return <div>
        <h2>确认删除吗？</h2>
        <button onClick={()=>{
            props.close()
        }}>取消</button><button onClick={()=>{
            props.close()
        }}>确认</button>
    </div>
}
    Wrap=CreatModel(Wrap)
class myDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            show:null
        }
    }
    render() {
        return (
            <div>
                <h1>我的详情</h1>
                <button onClick={()=>{
                    this.state.show()
                }}>弹框</button>
                <Wrap getMethod={(close,show)=>{
                    this.setState({
                        show
                    })
                }}/>
            </div>
        )
    }
}
myDetail=Lanjie(myDetail)
export default myDetail;
