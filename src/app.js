import React from "react";

import Form from "./components/form";
import TypedRow from "./components/typedRow";

import "./app.scss";

// import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextId: 0,
      thingsTyped: []
    };
  }

  sayIt = saidObj => {
    const newThing = { id: "bla" + this.state.nextId, value: saidObj };
    const newThingsTyped = this.state.thingsTyped.concat(newThing);
    this.setState({
      thingsTyped: newThingsTyped,
      nextId: this.state.nextId + 1
    });
  };

  handleDelete = itemId => {
    console.log("item id was called", itemId);
    const items = this.state.thingsTyped.filter(item => item.id !== itemId);
    this.setState({ thingsTyped: items });
  };

  handleEdit = (itemId, newObj) => {
    console.log("item id was edited", itemId);
    const newThingsTyped = JSON.parse(JSON.stringify(this.state.thingsTyped));
    for (let i = 0; i < newThingsTyped.length; i++) {
      if (newThingsTyped[i].id === itemId) {
        newThingsTyped[i].value = newObj;
      }
    }
    this.setState({ thingsTyped: newThingsTyped });
  };

  render() {
    return (
      <div>
        <p>To-Do List</p>
        <Form action={this.sayIt} />
        {this.state.thingsTyped.map(listItem => (
          <TypedRow
            value={listItem.value}
            id={listItem.id}
            key={listItem.id}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default App;
