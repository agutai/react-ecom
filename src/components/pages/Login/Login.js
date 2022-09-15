import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import FormInputMolecule from "../../molecules/FormInputMolecule";
import Dashboard from "../Dashboard/Dashboard";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
  };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    if (username === "") {
      this.setState({ errors: { username: "Username is required." } });
      return;
    }

    if (password === "") {
      this.setState({ errors: { password: "Password is required." } });
      return;
    }

    const user = { username, password };

    axios
      .post("http://localhost:8080/api/v1/ecommerce/user/login", user)
      .then((data) => {
        let userData = data.data;
        localStorage.setItem("userData", JSON.stringify(userData));
      });

    var DataString = localStorage.getItem("userData");
    console.log(DataString);

    this.setState({ username: "", password: "" });
  };

  render() {
    const { username, password, errors } = this.state;
    return (
      <div className="card">
        <div className="card-header h1 text-center">User Login</div>
        <div className="card-body">
          <form onSubmit={this.onHandleSubmit}>
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
export default Login;
