import React, { Component } from "react";

export default class ProductsButtonAtom extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "monospace",
        }}
      >
        <a
          style={{ textDecoration: "none" }}
          href="/Products"
          className="text-align:center mb-5"
        >
          View Our Products
        </a>
      </div>
    );
  }
}
