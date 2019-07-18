import React, { Component } from "react";
import "./left.css";
export default class left extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p
          onClick={this.props.eve}
          className={this.props.ind === this.props.code ? "act" : ""}
        >
          {this.props.title}
        </p>
      </div>
    );
  }
}
