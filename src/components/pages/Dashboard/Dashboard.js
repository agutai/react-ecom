import React from "react";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  if (!sessionStorage.getItem("userData")) {
    return <Navigate to="/Login" replace />;
  }
  return (
    <div style={{ marginBottom: "140px" }}>
      <h2>Dashboard</h2>
      <a href="/Report">Report A Problem</a>
    </div>
  );
}
