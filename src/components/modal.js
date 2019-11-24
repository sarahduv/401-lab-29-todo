import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <div
        className={
          'modalDetails' + (this.props.show ? ' modalShow' : ' modalHide')
        }
      >
        {this.props.children}
        <input type="button" onClick={this.props.onClose} value="close" />
      </div>
    );
  }
}

export default Modal;
