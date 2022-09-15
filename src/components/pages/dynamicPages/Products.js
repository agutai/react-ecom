import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await fetch(
      "http://localhost:8080/api/v1/ecommerce/item",
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "70px",
          }}
        >
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Size
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/">
                1
              </a>
              <a className="dropdown-item" href="/">
                2
              </a>
              <a className="dropdown-item" href="/">
                3
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                4
              </a>
            </div>
          </div>
          <div className="btn-group">
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                Separated link
              </a>
            </div>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-success dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Price
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                Separated link
              </a>
            </div>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-info dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Colour
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                Separated link
              </a>
            </div>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-warning dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Type
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                Separated link
              </a>
            </div>
          </div>
        </div>

        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Product List
        </h1>

        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }
}
export default Products;
