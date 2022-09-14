import React, { Component } from "react";
import FormInputMolecule from "../../molecules/FormInputMolecule";

class AddClothingItem extends Component {
  state = {
    seller: "",
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
    const { seller, title, price, colour, size, type, material } = this.state;

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

    if (size === "") {
      this.setState({ errors: { size: "Clothing Size required" } });
      return;
    }

    if (type === "") {
      this.setState({ errors: { type: "type required" } });
      return;
    }

    const newClothingItem = {
      seller: { seller },
      title: { title },
      price: { price },
      colour: { colour },
      size: { size },
      type: { type },
      material: { material },
    };
    console.log(newClothingItem);

    this.setState({
      seller: "",
      title: "",
      price: "",
      colour: "",
      size: "",
      type: "",
      material: "",
    });
  };

  render() {
    const { seller, title, price, colour, size, type, material, errors } =
      this.state;
    return (
      <div className="card">
        <div className="card-header text-center">
          <h1>Add New Clothing Listing</h1>
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
                name="size"
                label="Clothing Size"
                type="number"
                value={size}
                placeholder="What size is your item?"
                onChange={this.onHandleChange}
                error={errors.size}
              />
            </div>
            <div className="mb-2">
              <FormInputMolecule
                name="type"
                label="Clothing Type"
                type="text"
                value={type}
                placeholder="What type of clothing is your item?"
                onChange={this.onHandleChange}
                error={errors.type}
              />
            </div>
            <div className="mb-2">
              <FormInputMolecule
                name="material"
                label="Material"
                type="text"
                value={material}
                placeholder="What material is your item made from?"
                onChange={this.onHandleChange}
                error={errors.material}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddClothingItem;
