import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homebody">
      <div className="homecontent">
        <h1>Welocome</h1>
        <h6>S17901 CS310 Assignment 3</h6>
        <h3>Sign in to view details</h3>
      </div>
      <Link className="btn btn-primary" to="/dashboard">Sign in</Link>
    </div>
  );
}
