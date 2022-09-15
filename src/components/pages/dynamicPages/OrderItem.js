import React, { Component } from "react";

export default class OrderItem extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "80px",
        }}
      >
        <h2 style={{ alignItems: "center" }}>Thanks For Your Order!</h2>
      </div>
    );
  }
}
