import React from 'react';
import Form from './form.js';
import Modal from './modal.js';

class TypedRow extends React.Component {
  state = {
    isComplete: false,
    isEdited: false,
    isModalShowing: false
  };

  handleClick = () => {
    if (this.state.isModalShowing) {
      return;
    }
    this.setState({ isComplete: true });
  };

  handleEditStart = () => {
    this.setState({ isEdited: true });
  };

  handleEditDone = e => {
    console.log('handle edit done ', e);
    this.props.onEdit(this.props.id, e);
    this.setState({ isEdited: false });
  };

  handleModalStart = () => {
    this.setState({ isModalShowing: true });
  };

  handleModalClose = () => {
    this.setState({ isModalShowing: false });
  };

  render() {
    let typedRow = null;
    if (this.state.isEdited) {
      typedRow = (
        <div className="typedrow">
          <Form
            action={e => {
              this.handleEditDone(e);
            }}
          />
        </div>
      );
    } else {
      typedRow = (
        <div
          className={'typedrow' + (this.state.isComplete ? ' complete' : '')}
          onClick={this.handleClick}
        >
          <div className="todolist">
            {/* Name: {this.props.value.name} <br/> */}
            To-do: {this.props.value.todo} <br />
            {/* Due: {this.props.value.due} <br/> */}
          </div>
          <Modal
            show={this.state.isModalShowing}
            onClose={this.handleModalClose}
          >
            <div className="todolist">
              Name: {this.props.value.name} <br />
              To-do: {this.props.value.todo} <br />
              Due: {this.props.value.due} <br />
            </div>
          </Modal>
        </div>
      );
    }
    return (
      <div className="typedrowContainer">
        {typedRow}
        <button onClick={this.handleEditStart}>Edit</button>
        <button onClick={() => this.props.onDelete(this.props.id)}>
          Delete
        </button>
        <button className="modal" onClick={this.handleModalStart}>
          Details
        </button>
      </div>
    );
  }
}

export default TypedRow;
