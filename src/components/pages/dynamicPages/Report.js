import React, { Component } from "react";
import FormInputMolecule from "../../molecules/FormInputMolecule";
import { Navigate } from "react-router-dom";

class Report extends Component {
  state = { itemId: "", issue: "", errors: {} };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { itemId, issue } = this.state;

    if (itemId === "") {
      this.setState({ errors: { itemId: "Item ID required" } });
      return;
    }

    if (issue === "") {
      this.setState({ errors: { issue: "Message required" } });
      return;
    }

    const newReport = { itemId, issue };
    console.log(newReport);

    this.setState({ itemId: "", issue: "" });

    //redirect to home page
    // window.location.replace("http://localhost:3000/");
  };

  render() {
    if (!sessionStorage.getItem("userData")) {
      return <Navigate to="/Login" replace />;
    }
    const { itemId, issue, errors } = this.state;
    return (
      <div className="card">
        <div className="card-header h1 text-center">Report an Issue</div>
        <div className="card-body">
          <form onSubmit={this.onHandleSubmit}>
            <FormInputMolecule
              id="itemId"
              type="text"
              label="Item ID"
              name="itemId"
              placeholder="Item ID"
              value={itemId}
              onChange={this.onHandleChange}
              error={errors.itemId}
            />
            <FormInputMolecule
              id="issue"
              type="text"
              label="Message"
              name="issue"
              placeholder="Tell us about your issue here..."
              value={issue}
              onChange={this.onHandleChange}
              error={errors.issue}
            />
            <input type="submit" className="btn btn-success" value="register" />
          </form>
        </div>
      </div>
    );
  }
}
export default Report;
