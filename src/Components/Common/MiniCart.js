import React, { Component } from "react";
import "../../Styles/MiniCart.css";
import { Link } from "react-router-dom";

class MiniCart extends Component {
  render() {
    return (
      <div
        style={{
          paddingInline: "20px",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <p>My Bag, 3 items</p>
        </div>
        <div className="items-div">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <p style={{ marginTop: "0" }}>Name</p>
            <p style={{ marginTop: "0" }}>500$</p>
            <p style={{ marginTop: "0" }}>Attributes:</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "0",
              }}
            >
              <button
                style={{ padding: 10, fontSize: 14 }}
                className="chip-btn"
              >
                S
              </button>
              <button
                style={{ padding: 10, fontSize: 14 }}
                className="chip-btn"
              >
                M
              </button>
              <button
                style={{ padding: 10, fontSize: 14 }}
                className="chip-btn"
              >
                L
              </button>
              <button
                style={{ padding: 10, fontSize: 14 }}
                className="chip-btn"
              >
                XL
              </button>
            </div>
            <p>Product Color:</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "0",
              }}
            >
              <button
                style={{
                  border: "solid #5ECE7B 2px",
                  backgroundColor: "green",
                  padding: "13px ",
                }}
                className="chip-btn"
              >
                {" "}
              </button>
              <button
                style={{
                  border: "none",
                  backgroundColor: "crimson",
                  padding: "13px ",
                }}
                className="chip-btn"
              >
                {" "}
              </button>
              <button
                style={{
                  border: "none",
                  backgroundColor: "brown",
                  padding: "13px ",
                }}
                className="chip-btn"
              >
                {" "}
              </button>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 10fr",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <button
                className="chip-btn"
                style={{
                  fontSize: "14px",
                  padding: "4px",
                  paddingInline: "14px",
                }}
              >
                +
              </button>
              <h5>1</h5>
              <button
                className="chip-btn"
                style={{
                  fontSize: "14px",
                  padding: "6px",
                  paddingInline: "15px",
                }}
              >
                -
              </button>
            </div>
            <div style={{ backgroundColor: "lightgreen" }}>IMG VERY COOL</div>
          </div>
        </div>
        <div className="items-div">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <p style={{ marginTop: "0" }}>Name</p>
            <p style={{ marginTop: "0" }}>500$</p>
            <p style={{ marginTop: "0" }}>Attributes:</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "0",
              }}
            >
              <button
                style={{ padding: 10, fontSize: 14 }}
                className="chip-btn"
              >
                S
              </button>
              <button
                style={{ padding: 10, fontSize: 14 }}
                className="chip-btn"
              >
                M
              </button>
              <button
                style={{ padding: 10, fontSize: 14 }}
                className="chip-btn"
              >
                L
              </button>
              <button
                style={{ padding: 10, fontSize: 14 }}
                className="chip-btn"
              >
                XL
              </button>
            </div>
            <p>Product Color:</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "0",
              }}
            >
              <button
                style={{
                  border: "solid #5ECE7B 2px",
                  backgroundColor: "green",
                  padding: "13px ",
                }}
                className="chip-btn"
              >
                {" "}
              </button>
              <button
                style={{
                  border: "none",
                  backgroundColor: "crimson",
                  padding: "13px ",
                }}
                className="chip-btn"
              >
                {" "}
              </button>
              <button
                style={{
                  border: "none",
                  backgroundColor: "brown",
                  padding: "13px ",
                }}
                className="chip-btn"
              >
                {" "}
              </button>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 10fr",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <button
                className="chip-btn"
                style={{
                  fontSize: "14px",
                  padding: "4px",
                  paddingInline: "14px",
                }}
              >
                +
              </button>
              <h5>1</h5>
              <button
                className="chip-btn"
                style={{
                  fontSize: "14px",
                  padding: "6px",
                  paddingInline: "15px",
                }}
              >
                -
              </button>
            </div>
            <div style={{ backgroundColor: "lightgreen" }}>IMG VERY COOL</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <p>Total: 200$</p>
        </div>
        <div className="btn-div">
          <button className="view-btn">
            <Link to="/check-out">view bag</Link>
          </button>
          <button className="check-out-btn">Checkout</button>
        </div>
      </div>
    );
  }
}

export default MiniCart;
