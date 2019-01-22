import React, { Component } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';


class App extends Component {
  state = {
    todos: [
      {id:1, content:"make sandwich"},
      {id:2, content:"play wideo games"}
    ]
  }
  addTodo = (todo) => {
      todo.id = Math.random()
      let todos = [...this.state.todos, todo]
      this.setState({
        todos: todos
      })
  }
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center">ToDo App</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
