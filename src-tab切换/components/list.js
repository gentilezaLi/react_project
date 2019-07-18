import React, { Component } from 'react'
import Left from "./left"
import Right from "./right"
export default class list extends Component {
    constructor(props){
        super(props);
        this.state={
            code:0,
            list: [
                {
                  title: '热门推荐',
                  children: [
                    {
                      name: '热门推荐',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '热门推荐',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '热门推荐',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '热门推荐',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    }
                  ]
                }, {
                  title: '鲜花',
                  children: [
                    {
                      name: '鲜花',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '鲜花',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '鲜花',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '鲜花',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    }
                  ]
                }, {
                  title: '永生花',
                  children: [
                    {
                      name: '永生花',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '永生花',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '永生花',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '永生花',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    }
                  ]
                }, {
                  title: '蛋糕',
                  children: [
                    {
                      name: '蛋糕',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '蛋糕',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '蛋糕',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '蛋糕',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    }
                  ]
                }, {
                  title: '巧克力',
                  children: [
                    {
                      name: '巧克力',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    }
                  ]
                }, {
                  title: '特设礼品',
                  children: [
                    {
                      name: '特设礼品',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '特设礼品',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '特设礼品',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    }
                  ]
                }, {
                  title: '品牌公仔',
                  children: [
                    {
                      name: '品牌公仔',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '品牌公仔',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    }
                  ]
                }, {
                  title: '礼篮',
                  children: [
                    {
                      name: '礼篮',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '礼篮',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '礼篮',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    }
                  ]
                }
                , {
                  title: '绿植花卉',
                  children: [
                    {
                      name: '绿植花卉',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '绿植花卉',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    },
                    {
                      name: '绿植花卉',
                      img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"
                    }
                  ]
                }
              ]
        }
    }
    eve(i){
        this.setState({
        code:i    
        })
    }
    render() {
        let {list,code}=this.state
        return (
            <div className="list">
                {
                    list.map((item,index)=>{
                        return <div className="left">
                            <Left key={index} title={item.title} ind={index} code={code} eve={this.eve.bind(this,index)}/>
                        </div>
                    })
                }
                <div className="right">
                   {
                       list[code].children.map((item,index)=>{
                           return <Right key={index} {...item} ind={index}/>
                       })
                   }
                </div>
            </div>
        )
    }
    
    
}
