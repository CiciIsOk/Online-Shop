import { Component } from "react";
import "../../Styles/Item.css";

export class ItemPage extends Component {
  render() {
    return (
      <div className="item-wrapper">
        <div className="item-image"></div>

        <div className="item-info">
          <h1>Product name</h1>
          <h4>Product Attributes:</h4>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <button onClick={() => console.log("click")} className="chip-btn">
              S
            </button>
            <button className="chip-btn active-btn">M</button>
            <button className="chip-btn">L</button>
            <button className="chip-btn">XL</button>
          </div>
          <h4>Product Color:</h4>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
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
              style={{ border: "none", backgroundColor: "crimson" }}
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
          <div>
            <h3>Price:</h3>
            <h3>500$</h3>
          </div>
          <button className="btn">Add To Cart</button>
          <p>
            Lorem ipsum dolor sit amet, consecrate radicalising elite. Fugit
            harm solute dolorous voluptuous ipsum quid, vero antique accuseds
            cupidity, at blandish laudanum inventory, enum param sed gusto
            senescent rerun. Aut?
          </p>
        </div>
      </div>
    );
  }
}

export default ItemPage;
