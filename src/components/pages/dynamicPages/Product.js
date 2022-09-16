import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Product.css";

class Product extends Component {
  render() {
    const {
      id,
      title,
      price,
      colour,
      seller,
      buyer,
      type,
      size,
      material,
      shoeSize,
      style,
    } = this.props.product;
    const propId = this.props.product.id;

    return (
      <div style={{ backgroundColor: "orange" }} className="card m-2 p-1">
        <h1 className="card-header h4 text-white text-center bg-default">
          <Link
            id="link_Styles"
            to={{
              pathname: "/Item/" + propId,
            }}
          >
            {title}
          </Link>
        </h1>

        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">Price: {price}</li>
            <li className="list-group-item">Colour: {colour}</li>
            <li className="list-group-item">
              Type: {type}
              {style}
            </li>
            <li className="list-group-item">
              Size: {size}
              {shoeSize}
            </li>
          </ul>
        </div>
        <a
          style={{
            textAlign: "center",
            textDecoration: "none",
            color: "white",
          }}
          href="/Order"
        >
          Order
        </a>
        <a
          style={{
            textDecoration: "none",
            color: "white",
            marginBottom: "6px",
            marginLeft: "3px",
          }}
          href="/Products"
        >
          Back To Products List
        </a>
      </div>
    );
  }
}

Product.defaultProps = {
  title: "not defined",
  price: "not defined",
  colour: "not defined",
  seller: "not defined",
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired,
};

export default Product;
