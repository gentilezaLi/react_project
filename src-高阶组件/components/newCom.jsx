import React from 'react'

export default function NewCom(color){
    return function(Component){
        return class extends React.Component{
            constructor(props){
                super(props);
                this.state={
                    style:{
                        background:props.color||color||"green"
                    }
                }
            }
            render(){
                console.log(this.props)
                return(
                    <div style={this.state.style}>
                        <Component/>
                    </div>
                )
            }
        }
    }
}