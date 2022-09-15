import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Dashboard extends Component {
  handleClick = () => {
    sessionStorage.clear();
    <Navigate to="/" replace />;
    window.location.reload();
  };

  render() {
    if (!sessionStorage.getItem("userData")) {
      return <Navigate to="/Login" replace />;
    }
    return (
      <div style={{ marginBottom: "140px" }}>
        <h2>Dashboard</h2>
        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <a href="/Report">Report A Problem</a>
            </li>
            <li>
              <a href="/addClothing">Add Clothing Item</a>
            </li>
            <li>
              <a href="/addShoe">Add Shoe Item</a>
            </li>
          </ul>
        </div>
        <button onClick={this.handleClick}>Logout</button>
      </div>
    );
  }
}
export default Dashboard;
