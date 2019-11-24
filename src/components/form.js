import React from "react";

class Form extends React.Component {
  state = {
    todo: "",
    name: "",
    due: null
  };

  handleSubmit = e => {
    console.log("submit som", this.state);
    e.preventDefault();
    this.props.action({
      todo: this.state.todo,
      name: this.state.name,
      due: this.state.due
    });
  };

  handleToDoChange = e => {
    this.setState({ todo: e.target.value });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleDueChange = e => {
    this.setState({ due: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="to-do" onChange={this.handleToDoChange} />
        <input placeholder="name" onChange={this.handleNameChange} />
        <input type="date" onChange={this.handleDueChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
