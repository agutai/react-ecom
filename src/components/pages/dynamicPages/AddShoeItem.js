import axios from "axios";
import React, { Component } from "react";
import FormInputMolecule from "../../molecules/FormInputMolecule";
import { Navigate } from "react-router-dom";

class AddShoeItem extends Component {
  state = {
    title: "",
    price: "",
    colour: "",
    shoeSize: "",
    style: "",
    errors: {},
  };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { seller, title, price, colour, shoeSize, style } = this.state;

    if (title === "") {
      this.setState({ errors: { title: "Title required" } });
      return;
    }

    if (price === "") {
      this.setState({ errors: { price: "Price required" } });
      return;
    }

    if (colour === "") {
      this.setState({ errors: { colour: "Colour required" } });
      return;
    }

    if (shoeSize === "") {
      this.setState({ errors: { shoeSize: "Shoe Size required" } });
      return;
    }

    if (style === "") {
      this.setState({ errors: { style: "Style required" } });
      return;
    }

    const newShoeItem = { title, price, colour, shoeSize, style };
    console.log(newShoeItem);
    //axios send the post request with new shoeitem to backend
    axios.post(
      "http://localhost:8080/api/v1/ecommerce/item/shoeItem",
      newShoeItem
    );

    this.setState({
      title: "",
      price: "",
      colour: "",
      shoeSize: "",
      style: "",
    });

    //redirect to home page
    // window.location.replace("http://localhost:3000/");
  };

  render() {
    if (!sessionStorage.getItem("userData")) {
      return <Navigate to="/Login" replace />;
    }
    const { title, price, colour, shoeSize, style, errors } = this.state;
    return (
      <div className="card">
        <div className="card-header text-center">
          <h1>Add New Shoes Listing</h1>
        </div>
        <div className="card-body">
          <form onSubmit={this.onHandleSubmit}>
            <div className="mb-2">
              <FormInputMolecule
                name="title"
                label="Title"
                type="text"
                value={title}
                placeholder="Please give your listing a title. "
                onChange={this.onHandleChange}
                error={errors.title}
              />
            </div>
            <div className="mb-2">
              <FormInputMolecule
                name="price"
                label="Price"
                type="text"
                value={price}
                placeholder="Please give a price for your listing. "
                onChange={this.onHandleChange}
                error={errors.price}
              />
            </div>
            <div className="mb-2">
              <FormInputMolecule
                name="colour"
                label="Colour"
                type="text"
                value={colour}
                placeholder="What colour is your item?"
                onChange={this.onHandleChange}
                error={errors.colour}
              />
            </div>
            <div className="mb-2">
              <FormInputMolecule
                name="shoeSize"
                label="Shoe Size"
                type="number"
                value={shoeSize}
                placeholder="What size are the shoes?"
                onChange={this.onHandleChange}
                error={errors.shoeSize}
              />
            </div>
            <div className="mb-2">
              <FormInputMolecule
                name="style"
                label="Style"
                type="text"
                value={style}
                placeholder="What style are your shoes?"
                onChange={this.onHandleChange}
                error={errors.style}
              />
            </div>
            <input type="submit" className="btn btn-success" value="register" />
          </form>
        </div>
      </div>
    );
  }
}
export default AddShoeItem;
