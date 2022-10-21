import React, { Component } from "react";
import "../../Styles/Cart.css";
import { allProducts } from "../../Containers/AllProductsContainer";
import Loading from "./Loading";
import Error from "./Error";
import { Query } from "react-apollo";
import ProductDisplay from "./ProductDisplay";

export class Cart extends Component {
  render() {
    return (
      <div className="container">
        <h1>Cart</h1>

        <Query query={allProducts}>
          {({ data, loading = false, error }) => {
            if (loading) return <Loading />;
            if (error) return <Error />;
            return (
              <>
                {data.category.products.map(({ name, gallery }) => (
                  <div className="cart-item">
                    <div className="item-attributes">
                      <div>
                        <h2 style={{ marginTop: "0" }}>{name}</h2>
                        <div style={{ marginTop: "0" }}>
                          <h3>500$</h3>
                        </div>
                        <h4 style={{ marginTop: "0" }}>Product Attributes:</h4>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            marginTop: "0",
                          }}
                        >
                          <button
                            onClick={() => console.log("click")}
                            className="chip-btn"
                          >
                            S
                          </button>
                          <button className="chip-btn active-btn">M</button>
                          <button className="chip-btn">L</button>
                          <button className="chip-btn">XL</button>
                        </div>
                        <h4>Product Color:</h4>
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
                            }}
                            className="chip-btn"
                          >
                            {" "}
                          </button>
                          <button
                            style={{
                              border: "none",
                              backgroundColor: "crimson",
                            }}
                            className="chip-btn"
                          >
                            {" "}
                          </button>
                          <button
                            style={{ border: "none", backgroundColor: "brown" }}
                            className="chip-btn"
                          >
                            {" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="item-container">
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
                            fontSize: "30px",
                            padding: "5px",
                            paddingInline: "15px",
                          }}
                        >
                          +
                        </button>
                        <h3>1</h3>
                        <button
                          className="chip-btn"
                          style={{
                            fontSize: "30px",
                            padding: "6px",
                            paddingInline: "19px",
                          }}
                        >
                          -
                        </button>
                      </div>
                      <img
                        style={{ width: "300px", marginLeft: "20px" }}
                        src={gallery}
                      />
                    </div>
                  </div>
                ))}
              </>
            );
          }}
        </Query>
        <div className="order">
          <div className="order-info">
            <h2 style={{ marginRight: "10px", marginTop: 0 }}>Tax 21%:</h2>
            <h2 style={{ marginRight: "10px", marginTop: 0 }}> $42.00</h2>
          </div>{" "}
          <div className="order-info">
            <h2 style={{ marginRight: "10px", marginTop: 0 }}>Quantity:</h2>
            <h2 style={{ marginRight: "10px", marginTop: 0 }}>3</h2>
          </div>{" "}
          <div className="order-info">
            <h2 style={{ marginRight: "10px", marginTop: 0 }}>Total:</h2>
            <h2 style={{ marginRight: "10px", marginTop: 0 }}>$1000</h2>
          </div>
          <button className="btn">Order</button>
        </div>
      </div>
    );
  }
}

export default Cart;
