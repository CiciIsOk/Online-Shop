import React from "react";
import "../../Styles/Filter.css";

class Filter extends React.Component {
  render() {
    return (
      <div className="filter-div">
        <div className="filter-title">
          <p>Filter</p>
        </div>
        <div className="stock">
          <p style={{ fontWeight: "bold" }}>Is in Stock?</p>
          <div className="checkbox-btn-div">
            <div className="checkbox-btn">
              <input type="checkbox" />
              <label>Yes</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>No</label>
            </div>
          </div>
        </div>
        <div className="price">
          <p style={{ fontWeight: "bold" }}>Select Price:</p>
          <div>
            <p>From:</p>
            <input type="number" />
          </div>
          <div>
            <p>To:</p>
            <input type="number" />
          </div>
        </div>
        <div className="filter-close-btn">
          <button>Filter</button>
        </div>
      </div>
    );
  }
}

export default Filter;
