import React from "react";
import { Link } from "react-router-dom";

export default function Nabar() {
  return (
    <div>
      <nav class="navbar navbar-expand navbar-dark bg-primary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Student Registration
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-outline-light" to="/adduser">Add User</Link>
        </div>
      </nav>
    </div>
  );
}
