import React, { Component } from 'react'
import {connect} from "react-redux"
import {Icon,Table,Button} from "antd"
import "../css/bian.css"
const columns = [
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
class bianjiDetail extends Component {
    state = {
        selectedRowKeys: [], 
      };
      onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      };
      //点击删除
      del(){
        let { selectedRowKeys } = this.state
        // console.log(selectedRowKeys)
        selectedRowKeys.sort((a,b)=>{return b-a}).map((item,index)=>{
            // new Promise((resolve,reject)=>{
            //     console.log(item,"item")
                this.props.savedel(this.props.bianList[item])
                // resolve()
                
                // console.log(this.props.bianList[item],"//")
            // })
        })
        this.setState({
            selectedRowKeys:[]
        })
      }
      
    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
          selectedRowKeys,
          onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        this.props.bianList.map((item,index)=>{item["key"]=index; return item})
        return (
            <div className="bainji">
                 <div className="header">
                    <Icon type="arrow-left" onClick={() => {
                        this.props.history.push("/list/zi")
                    }} /><span>股票添加</span><span></span>
                </div>
                <div className="middle">

                <Table rowSelection={rowSelection} columns={columns} dataSource={this.props.bianList} />

                </div>
                <div className="bottom">
                    <div className="sc" disabled={!hasSelected} style={selectedRowKeys.length!==0?{background:"red"}:{}}
                        onClick={this.del.bind(this)}
                    >删除({selectedRowKeys.length})</div>
                </div>

            </div>
        )
    }
}
let mapStateToProps=(state)=>{
    return{
        bianList:state.addReducer
    }
}
let mapDispathchToProps=(dispatch)=>{
    return{
        savedel:(data)=>{
            dispatch({type:"DEL",data})
        }
    }
}
bianjiDetail=connect(mapStateToProps,mapDispathchToProps)(bianjiDetail)
export default bianjiDetail;



