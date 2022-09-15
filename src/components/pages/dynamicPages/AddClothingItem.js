import axios from "axios";
import React, { Component } from "react";
import RegisterFormInputMolecule from "../../molecules/RegisterFormInputMolecule";

class AddClothingItem extends Component {
  state = {
    title: "",
    price: "",
    colour: "",
    size: "",
    type: "",
    material: "",
    errors: {},
  };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    const { title, price, colour, size, type, material } = this.state;

    if (title === "") {
      this.setState({ errors: { title: "Title is required." } });
      return;
    }

    if (price === "") {
      this.setState({ errors: { price: "Price is required." } });
      return;
    }

    if (colour === "") {
      this.setState({ errors: { colour: "Colour is required." } });
      return;
    }

    if (size === "") {
      this.setState({ errors: { size: "Size is required." } });
      return;
    }

    if (type === "") {
      this.setState({ errors: { type: "Type is required." } });
      return;
    }

    if (material === "") {
      this.setState({ errors: { material: "Material is required." } });
      return;
    }

    const newClothingItem = { title, price, colour, size, type, material };
    console.log(newClothingItem);
    //axios send the post request with new employeed to backend
    axios.post(
      "http://localhost:8080/api/v1/ecommerce/item/clothingItem",
      newClothingItem
    );

    this.setState({
      title: "",
      price: "",
      colour: "",
      size: "",
      type: "",
      material: "",
    });

    //redirect to home page
    // window.location.replace("http://localhost:3000/");
  };

  render() {
    const { title, price, colour, size, type, material, errors } = this.state;
    return (
      <div className="card">
        <div className="card-header h1 text-center">Add Clothing</div>
        <div className="card-body">
          <form onSubmit={this.onHandleSubmit}>
            <RegisterFormInputMolecule
              id="title"
              type="text"
              label="Title"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.onHandleChange}
              error={errors.title}
            />

            <RegisterFormInputMolecule
              id="price"
              type="text"
              label="Price"
              name="price"
              placeholder="Price"
              value={price}
              onChange={this.onHandleChange}
              error={errors.price}
            />

            <RegisterFormInputMolecule
              id="colour"
              type="text"
              label="Colour"
              name="colour"
              placeholder="Colour"
              value={colour}
              onChange={this.onHandleChange}
              error={errors.colour}
            />

            <RegisterFormInputMolecule
              id="size"
              type="text"
              label="Size"
              name="size"
              placeholder="Size"
              value={size}
              onChange={this.onHandleChange}
              error={errors.size}
            />

            <RegisterFormInputMolecule
              id="type"
              type="text"
              label="Type"
              name="type"
              placeholder="Size"
              value={type}
              onChange={this.onHandleChange}
              error={errors.type}
            />

            <RegisterFormInputMolecule
              id="material"
              type="text"
              label="Material"
              name="material"
              placeholder="Material"
              value={material}
              onChange={this.onHandleChange}
              error={errors.material}
            />

            <input type="submit" className="btn btn-success" value="register" />
          </form>
        </div>
      </div>
    );
  }
}
export default AddClothingItem;
