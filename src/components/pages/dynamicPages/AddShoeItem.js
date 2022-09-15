import React, { Component } from "react";
import FormInputMolecule from "../../molecules/FormInputMolecule";

class AddShoeItem extends Component {
  state = {
    seller: "",
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

    if (seller === "") {
      this.setState({ errors: { seller: "Username required" } });
      return;
    }

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

    const newShoeItem = {
      seller: { seller },
      title: { title },
      price: { price },
      colour: { colour },
      shoeSize: { shoeSize },
      style: { style },
    };
    console.log(newShoeItem);

    this.setState({
      seller: "",
      title: "",
      price: "",
      colour: "",
      shoeSize: "",
      style: "",
    });
  };

  render() {
    const { seller, title, price, colour, shoeSize, style, errors } =
      this.state;
    return (
      <div className="card">
        <div className="card-header text-center">
          <h1>Add New Shoes Listing</h1>
        </div>
        <div className="card-body">
          <form onSubmit={this.onHandleSubmit}>
            <div className="mb-2">
              <FormInputMolecule
                name="seller"
                label="Username"
                type="text"
                value={seller}
                placeholder="Please enter your username."
                onChange={this.onHandleChange}
                error={errors.username}
              />
            </div>
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
                type="number"
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
          </form>
        </div>
      </div>
    );
  }
}
export default AddShoeItem;
