import React, { Component } from 'react'
import "./css/ite.css"
export default class ite extends Component {
    render() {
        let {img,title,price,con}=this.props
        return (
            <>
               <div className="ite">
                    <div className="lll">
                        <img src={img} alt=""/>
                     </div>  
                    <div className="rrr">
                        <p><span>{title}</span><span>来一份</span></p>
                        <p>{con}</p>
                        <p>${price}元</p>
                    </div> 
                </div> 
            </>
        )
    }
}
