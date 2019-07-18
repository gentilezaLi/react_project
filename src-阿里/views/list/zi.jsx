import React, { Component } from 'react'
import "../../css/zi.css"
import {Button,Table } from "antd"
import {getDate} from "../../api/index"  //网络请求
import {connect} from "react-redux"
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '名称',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: '型号',
        dataIndex: 'num',
        key: 'num',
    }
]

 class zi extends Component {

    state={
        visible: false
    }
    

    // async componentDidMount() {
    //     let list=await getDate()
    //     console.log(list,"请求回来的数据")
    //     this.props.saveData(list)
    // }
    
    //请求拿到数据
    componentDidMount() {
        this.props.saveData(getDate)
    }
    
    render() {
        console.log(this.props.addList)
        return (
            <div className="zixuan">
                <div className="header">
                    <span className="iconfont icon-gengduo-2"></span>
                    <span>自选</span>
                    <span></span>
                    <span className="iconfont icon-kefu"></span>
                    <span className="iconfont icon-fangdajing" onClick={() => {
                        this.props.history.push("/inpDetail")
                    }}></span>
                </div>
                <div className="con">
                    <div className="imgs">
                        <img src="http://localhost:3000/IMG_2857.png" alt="" />
                    </div>

                    <div className="content">
                        <div className="bian">
                        <Button type="danger" icon="form" href="#" onClick={()=>{
                            this.props.history.push("/bianjidetail")
                        }}>编辑</Button>
                        <Button type="danger" icon="plus-square" onClick={() => {
                        this.props.history.push("/inpDetail")
                    }}>添加</Button>
                            <span>最新</span>
                            <span>涨幅</span>
                            <span>涨跌</span>
                        </div>
                        <div className="data"></div>

                        <Table dataSource={this.props.addList} columns={columns} />
                          
                        </div> 
                    </div>
                </div>
               
        )
    }
}
let mapStateToProps=(state)=>{
    return{
        addList:state.addReducer
    }
}
let mapDispathchToProps=(dispatch)=>{
    return{
        saveData:(fn)=>{
            dispatch(fn)
        }
    }
}
zi=connect(mapStateToProps,mapDispathchToProps)(zi)
export default zi;
