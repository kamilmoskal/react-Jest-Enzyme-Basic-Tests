import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content: ""
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.content.length > 0) {
      this.props.addTodo(this.state);
      this.setState({
        content: ""
      })
    } else {
      alert("You must fill todo")
    }
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Add new todo:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content}/>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;

