import React, { Component } from 'react'
import Lanjie from "../hoc/lanjie"
 class homeDetail extends Component {
    render() {
        return (
            <div>
                <h1>主页详情</h1>
            </div>
        )
    }
}
homeDetail=Lanjie(homeDetail)
export default homeDetail;