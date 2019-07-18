import React from 'react'

function hocComponent(Component,color){
    return class Hoc extends React.Component{
        constructor(props){
            super(props);
            this.state={
                name:"zhangsan",
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

export default hocComponent;
