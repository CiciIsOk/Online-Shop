import React, { Component } from "react";
import Products from "../Components/Products";
import gql from "graphql-tag";

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

export class AllProductsContainer extends Component {
  render() {
    return <Products />;
  }
}
export default AllProductsContainer;
