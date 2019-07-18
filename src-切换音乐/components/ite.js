import React, { Component } from 'react'
import "./ite.css"
export default class ite extends Component {
    constructor(props) {
        super(props);
        this.refAutio = React.createRef();
        this.state = {
            flag: false,
            timer: null,
            clickStyle: {
                background: "purple"
            },
            normalStyle: {
                boxShadow: "10px 10px 15px black"
            }
        }
    }
    setFlag() {
        clearTimeout(this.state.timer)


        this.setState({

            flag: true,
            timer: setTimeout(() => {
                this.setState({
                    flag: false
                })
            }, 1)
        })

    }
    eve() {
        let oAudio = this.refAutio.current;
        if (oAudio) {
            oAudio.currentTime = 0
            let number = parseFloat(this.props.range / 100)
            console.log(number)
            oAudio.volume = number
            oAudio.play()
            this.setFlag()
            this.props.onShow(this.props.id)
        }

    }
    componentDidMount() {
        document.addEventListener("keydown", (e) => {
            if (e.keyCode === this.props.keyCode) {
                this.setFlag()
                this.eve()
            }
        })
    }

    render() {
        let { flag, clickStyle, normalStyle } = this.state
        return (
            <div className="ite">
                <audio src={this.props.url} ref={this.refAutio}></audio>
                <p className="actt" style={flag ? clickStyle : normalStyle}
                    onClick={this.eve.bind(this)}
                >{this.props.keyTrigger}</p>
            </div>
        )
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", () => {

        })

        clearTimeout(this.state.timer)
        console.log(this.state.timer)
    }
}
