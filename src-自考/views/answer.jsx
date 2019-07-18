import React, { Component } from 'react'
import { connect } from "react-redux"
import "../css/answer.css"
class answer extends Component {

    clickChange(e) {

        let data = this.props.list
        data[0].questions[this.props.match.params.id].userAnswer = e.target.innerHTML
        this.props.cun_answer(data)
        if (this.props.list[0].questions.length - 2 < this.props.match.params.id) {
            alert("已经是最后一题了")
            return
        }
        this.props.history.replace("/answer/" + (this.props.match.params.id * 1 + 1))

    }
    render() {
        // console.log(this.props.match.params)
        let { id } = this.props.match.params
        let radio = this.props.list[0]
        // console.log(radio)
        return (
            <div className="answer">
                <div className="a_h">
                    <span onClick={() => {
                        this.props.history.push("/list")
                    }}>返回</span>
                    <span></span>
                    <span>真题模考</span>
                    <span></span>
                    <span></span>
                    <span>订单</span>
                </div>
                <h4>{this.props.list[0].title}</h4>
                <h1 style={{ background: "red", width: "100%", height: "44px" }}>{id * 1 + 1}/{radio.questions.length}</h1>
                <div className="a_con">
                    <p dangerouslySetInnerHTML={{ __html: radio.questions[id].title }}></p>
                    {radio.questions[id].questionChoices.map((item, index) => {
                        return <li key={item.id} >
                            <span onClick={this.clickChange.bind(this)}
                                className={radio.questions[id].userAnswer === item.order.toUpperCase() ? "action" : ""}
                            >{item.order.toUpperCase()}</span> {item.content}
                        </li>
                    })}

                </div>

            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        list: state.alldataReducer
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        cun_answer: (list) => {
            dispatch({ type: "ALLDATA", list })
        }
    }
}
answer = connect(mapStateToProps, mapDispatchToProps)(answer)
export default answer;
