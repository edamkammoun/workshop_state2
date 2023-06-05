
import './App.css';

import React, { Component } from 'react'
import TaskList from './Components/TaskList';
import Add from './Components/Add';

export default class App extends Component {
  state={
    todos:[
      {
        id:Math.random(),action:"Wake up",isDone:true
      },
      {
        id:Math.random(),action:"Go Out",isDone:false
      },
      {
        id:Math.random(),action:"buy Coffe",isDone:true
      },
      {
        id:Math.random(),action:"Read a Book",isDone:false
      },
    ]
  }
// delete function
handleDelete=(TheId)=>this.setState({todos:this.state.todos.filter(el=>el.id!==TheId)})
// complete function
handleComplete=(ID)=>this.setState({todos:this.state.todos.map(el=>el.id===ID?{...el,isDone:!el.isDone}:el)})
//add new task
handleAdd=(newTask)=>this.setState({todos:[newTask,...this.state.todos]})
  render() {
    return (
      <div className='App'>
        <Add addFunction={this.handleAdd} />
        <TaskList list={this.state.todos} deletFunction={this.handleDelete} completeFunction={this.handleComplete} />
      </div>
    )
  }
}

