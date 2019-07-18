import { Icon, Input } from "antd";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { List } from "antd"

class inpDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: "",
            data: [
                { key: 5, title: "阿里那制药", num: 367785, id: 5 },
                { key: 6, title: "上海", num: 735395, id: 6 }
            ],
            msg:"添加"
        }
    }
    
    handle(item){
        //点击添加就变已添加 防止重复添加
            if(!this.props.addList.some(ite=>ite.id===item.id)){
               this.props.saveAdd(item)
            }
        }

    render() {
        console.log(this.props.list, "取出来")
        return (
            <div className="inpdetail">
                <div className="header">
                    <Icon type="arrow-left" onClick={() => {
                        this.props.history.push("/list/zi")
                    }} /><span>股票添加</span><span></span>
                </div>
                <div>
                    <div style={{ background: "red", height: "35px" }}>
                        <Input placeholder="请输入股票代码/简拼" allowClear value={this.state.val} onChange={(e) => {
                            this.setState({
                                val: e.target.value,
                                data: e.target.value === "" ? [] : this.props.list.filter(item => item.title.includes(e.target.value))
                            })
                        }} />
                    </div>
                    <div>
                        {/* //模糊搜索下方列表 */}
                        {this.state.data&& <List
                                size="large"
                                bordered
                                dataSource={this.state.data}
                                renderItem={item => <List.Item actions={[<a onClick={this.handle.bind(this,item)}>{this.props.addList.some(ite=>ite.id===item.id)?'已添加':"添加"}</a>]}>{item.title}</List.Item>} />}
                    </div>
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        list: state.dataReducer.list,
        addList:state.addReducer
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        saveAdd: (obj) => {
            dispatch({ type: "ADD", obj })
        }
       
        
    }
}

inpDetail = connect(mapStateToProps, mapDispatchToProps)(inpDetail)
export default inpDetail;
