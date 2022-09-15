import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Product extends Component {
  render() {
    const { id, title, price, colour, seller, buyer, type, size, material } =
      this.props.product;
    const propId = this.props.product.id;

    return (
      <div className="card bg-info m-2 p-1">
        <h1 className="card-header h4 text-white text-center bg-default">
          <i className="fa fa-user mx-2" aria-hidden="true"></i>
          <Link
            to={{
              pathname: "/Item/" + propId,
            }}
          >
            {title} {id}
          </Link>
        </h1>

        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">Price: {price}</li>
            <li className="list-group-item">Colour: {colour}</li>
            <li className="list-group-item">Type: {type}</li>
            <li className="list-group-item">Size: {size}</li>
            <li className="list-group-item">Material: {material}</li>
            <li className="list-group-item">Seller: {seller}</li>
            <li className="list-group-item">Buyer: {buyer}</li>
          </ul>
        </div>
        <a href="/Order">Order</a>
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
