import { Component } from "react";
import "../../Styles/Loading.css";
import React from "react";

export class Loading extends Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "47%",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <span className="loader"></span>
          <p>Loading . . .</p>
        </div>
      </div>
    );
  }
}

export default Loading;
