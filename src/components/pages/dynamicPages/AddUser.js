import React, { Component } from "react";
import FormInputMolecule from "../../molecules/FormInputMolecule";
// import { response } from 'express';
import axios from "axios";

class AddUser extends Component {
  state = {
    fullName: "",
    userName: "",
    password: "",
    errors: {},
  };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    const { fullName, userName, password } = this.state;

    if (fullName === "") {
      this.setState({ errors: { fullName: "Full Name required" } });
      return;
    }

    if (userName === "") {
      this.setState({ errors: { userName: "User Name required" } });
      return;
    }

    if (password === "") {
      this.setState({ errors: { password: "Password required" } });
      return;
    }

    // const newUser = { fullName, userName, password };

    // console.log(newUser);

    // fetch("http://localhost:8080/api/v1/ecommerce/user", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: newUser,
    // });

    // axios.post("http://localhost:8080/api/v1/ecommerce/user", newUser);

    var newUser = { fullName, userName, password };

    var axios = require("axios");
    var config = {
      method: "post",
      url: "http://localhost:8080/api/v1/ecommerce/user",
      headers: {
        "Content-Type": "application/json",
      },
      data: newUser,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { fullName, userName, password, errors } = this.state;
    return (
      <div className="card">
        <div className="card-header text-center">
          <h1>User Registration</h1>
        </div>
        <div className="card-body">
          <form onSubmit={this.onHandleSubmit}>
            <div className="mb-2">
              <FormInputMolecule
                label="Full Name"
                id="fullName"
                name="fullName"
                placeholder="Please enter your full name."
                value={fullName}
                onChange={this.onHandleChange}
                error={errors.fullName}
                type="text"
              />
            </div>
            <div className="mb-2">
              <FormInputMolecule
                label="User Name"
                id="userName"
                name="userName"
                placeholder="Please enter your user name."
                value={userName}
                onChange={this.onHandleChange}
                error={errors.userName}
                type="text"
              />
            </div>
            <div className="mb-2">
              <FormInputMolecule
                label="Password"
                id="password"
                name="password"
                placeholder="Please enter your password."
                value={password}
                onChange={this.onHandleChange}
                error={errors.password}
                type="text"
              />
            </div>
            <input
              type="submit"
              value="register"
              className="btn btn-outline-primary float-end"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default AddUser;
