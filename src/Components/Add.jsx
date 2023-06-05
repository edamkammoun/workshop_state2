import React, { Component } from "react";

export default class Add extends Component {
  state = {
    newAction: "",
  };
  handleSubmit = (e) => {
    e.preventDefault()
    const newOne = {
      id: Math.random(),
      action: this.state.newAction,
      isDone: false,
    };
    this.props.addFunction(newOne);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input
            type="text"
            value={this.state.newAction}
            onChange={(e) => this.setState({ newAction: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
