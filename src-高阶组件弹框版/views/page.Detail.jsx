import React, { Component } from 'react'
import Lanjie from "../hoc/lanjie"

class pageDetail extends Component {
    render() {
        return (
            <div>
                <h1>页面详情</h1>
            </div>
        )
    }
}
pageDetail=Lanjie(pageDetail)
export default pageDetail;

