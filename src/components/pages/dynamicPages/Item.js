import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

class Item extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    var url = window.location.pathname.split("/");
    var urlId = url[2];

    const response = await fetch(
      "http://localhost:8080/api/v1/ecommerce/item/id/" + urlId,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const body = await response.json();
    this.setState({ products: body });
  }

  render() {
    const { products } = this.state;

    return (
      <div
        style={{
          marginBottom: "140px",
        }}
      >
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }
}
export default Item;
