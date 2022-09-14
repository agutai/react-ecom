import React, { Component } from "react";
import uuid from "react-uuid";
import FormInputMolecule from "../../molecules/FormInputMolecule";

class AddUser extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone required" } });
      return;
    }

    const newStudent = {
      id: uuid(),
      name: { name },
      phone: { phone },
      email: { email },
    };
    console.log(newStudent);

    this.setState({ name: "", email: "", phone: "" });
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
                name="userName"
                placeholder="Please enter your user name."
                value={userName}
                onChange={this.onHandleChange}
                error={errors.userName}
                type="userName"
              />
            </div>
            <div className="mb-2">
              <FormInputMolecule
                label="Password"
                name="password"
                placeholder="Please enter your password."
                value={password}
                onChange={this.onHandleChange}
                error={errors.password}
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
