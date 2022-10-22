import React, { Component } from "react";
import "../../Styles/Modal.css";

class Modal extends Component {
  render() {
    return (
      <div
        className={
          this.props.show ? "modal display-block" : "modal display-none"
        }
      >
        <section className="modal-main">{this.props.children}</section>
      </div>
    );
  }
}

export default Modal;
