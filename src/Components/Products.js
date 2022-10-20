import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import "../Styles/Products.css";
import Loading from "./Common/Loading";
import Error from "./Common/Error";
import ProductDisplay from "./Common/ProductDisplay";

export const allProducts = gql`
  {
    category {
      products {
        id
        name
        gallery
        category
        description
        prices {
          amount
        }
      }
    }
  }
`;

export class Products extends Component {
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
                <h1 className="category-name">All Products</h1>
              </div>
              <div className="grid">
                {data.category.products.map(({ id, name, gallery, prices }) => (
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

export default Products;
