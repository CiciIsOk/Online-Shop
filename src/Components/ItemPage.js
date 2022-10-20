import { Component } from "react";
import "../Styles/Item.css";

export class ItemPage extends Component {
  render() {
    return (
      <div className="item-wrapper">
        <div className="item-image">image</div>

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
            <button style={{ backgroundColor: "green" }} className="chip-btn">
              {" "}
            </button>
            <button style={{ backgroundColor: "crimson" }} className="chip-btn">
              {" "}
            </button>
            <button style={{ backgroundColor: "brown" }} className="chip-btn">
              {" "}
            </button>
          </div>
          <div>
            <h3>Price:</h3>
            <h3>500$</h3>
          </div>
          <button className="btn">Add To Cart</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            harum soluta doloribus voluptas ipsum quidem, vero atque accusamus
            cupiditate, at blanditiis laudantium inventore, enim aperiam sed
            iusto nesciunt rerum. Aut?
          </p>
        </div>
      </div>
    );
  }
}

export default ItemPage;
