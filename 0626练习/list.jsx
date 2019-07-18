import React, { Component } from 'react'

export default class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    type: "分类",
                    id: 0,
                    children: [
                        {
                            type: "网页设计",
                            t_id: 0,
                            children: [
                                {
                                    type: "企业官网",
                                    w_t_id: 0,
                                },
                                {
                                    type: "专题活动",
                                    w_t_id: 1,
                                }
                            ]
                        },
                        {
                            type: "电商视觉",
                            t_id: 1,
                            children: [
                                {
                                    type: "企业fdgfdg官网2",
                                    w_t_id: 0,
                                },
                                {
                                    type: "专题活fdgfdfd动3",
                                    w_t_id: 1,
                                }
                            ]
                        },
                        {
                            type: "移动UI",
                            t_id: 2,
                            children: [
                                {
                                    type: "企业官nyy网3",
                                    w_t_id: 0,
                                },
                                {
                                    type: "fdfd",
                                    w_t_id: 1,
                                }
                            ]
                        },
                    ]
                },
                {
                    type: "排序",
                    id: 1
                },
                {
                    type: "全部",
                    id: 2
                },
                {
                    type: "作者",
                    id: 3
                }
            ],
            code:-1,
            code2:-1
        }
    }
    eve(id){
        console.log(id)
        this.setState({
            code:id
        })
    }
    evev(id){
        console.log(id)
        this.setState({
            code2:id
        })
    }
    render() {
        let {list,code,code2} =this.state
        return (
            <div>
                <div>
                   {list.map((item,index)=>{
                    return <span key={item.id} style={{marginLeft:"30px"}} 
                    onMouseOver={this.eve.bind(this,item.id)}
                    >{item.type}</span>
                })} 
                </div>
                <div>
                    {list[code]?(list[code].children?list[code].children.map((item,index)=>{
                       return <li key={item.t_id}
                       onMouseOver={this.evev.bind(this,item.t_id)}
                       >{item.type}</li>
                    }):""):""}
                </div>
                <div>
                   {list[code]?(list[code].children?(list[code].children[code2]?(list[code].children[code2].children?(list[code].children[code2].children.map((item,index)=>{
                       return <p key={item.w_t_id}>{item.type}</p>
                   })):""):""):""):""}
                </div>
                

            </div>
        )
    }
}
