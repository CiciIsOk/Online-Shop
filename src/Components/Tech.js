import React, { Component } from "react";
import { Query } from "react-apollo";
import "../Styles/Products.css";
import Loading from "./Common/Loading";
import Error from "./Common/Error";
import { allProducts } from "./Products";
import ProductDisplay from "./Common/ProductDisplay";

export class Tech extends Component {
  render() {
    return (
      <Query query={allProducts}>
        {({ data, loading = false, error }) => {
          if (loading) return <Loading />;
          if (error) return <Error />;

          return (
            <div
              style={{
                padding: "50px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  paddingInline: "50px",
                }}
              >
                <h1 className="category-name">Tech</h1>
              </div>
              <div className="grid">
                {data.category.products
                  .filter((e) => e.category === "tech")
                  .map(({ id, name, gallery, prices }) => (
                    <ProductDisplay id={id} name={name} gallery={gallery} />
                  ))}
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Tech;
