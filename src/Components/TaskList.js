import React, { Component } from "react";
import TaskCard from "./TaskCard";

export default class TaskList extends Component {
  render() {
    // console.log(this.props.list)
    return (
      <div>
        {this.props.list.map((item, i) => (
          <TaskCard
            task={item}
            key={i}
            deleteMethode={this.props.deletFunction}
            CompleteMethode={this.props.completeFunction}
          />
        ))}
      </div>
    );
  }
}
