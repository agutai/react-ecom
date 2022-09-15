import axios from "axios";
import React, { Component } from "react";
import FormInputMolecule from "../../molecules/FormInputMolecule";

class AddUser extends Component {
  state = {
    fullName: "",
    username: "",
    password: "",
    errors: {},
  };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    const { fullName, username, password } = this.state;

    if (fullName === "") {
      this.setState({ errors: { fullName: "Full name is required." } });
      return;
    }

    if (username === "") {
      this.setState({ errors: { username: "Username is required." } });
      return;
    }

    if (password === "") {
      this.setState({ errors: { password: "Password is required." } });
      return;
    }

    const newUser = { fullName, username, password };
    console.log(newUser);

    axios.post("http://localhost:8080/api/v1/ecommerce/user", newUser);

    this.setState({ fullName: "", username: "", password: "" });
  };

  render() {
    const { fullName, username, password, errors } = this.state;
    return (
      <div className="card">
        <div className="card-header h1 text-center">User Registration</div>
        <div className="card-body">
          <form onSubmit={this.onHandleSubmit}>
            <FormInputMolecule
              id="fullName"
              label="fullName"
              name="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={this.onHandleChange}
              error={errors.fullName}
            />

            <FormInputMolecule
              id="username"
              label="User Name"
              name="username"
              placeholder="Username"
              value={username}
              onChange={this.onHandleChange}
              error={errors.username}
            />

            <FormInputMolecule
              id="password"
              label="Password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.onHandleChange}
              error={errors.password}
            />

            <input type="submit" className="btn btn-success" value="register" />
          </form>
        </div>
      </div>
    );
  }
}
export default AddUser;
