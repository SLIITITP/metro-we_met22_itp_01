import React from "react";
import { Link } from "react-router-dom";

function MainNavigationSupplier() {
  return (
    <div
      className="container"
      style={{
        zIndex: "1",
        width: "30%",
        position: "fixed",
        float: "top",
        top: "0",
        backgroundColor: "white",
      }}
    >
      <ul
        className="nav nav-tabs"
        id="myTab"
        role="tablist"
        style={{ backgroundColor: "white" }}
      >
        <li className="nav-item" role="presentation">
          <Link to="/" style={{ textDecoration: "none" }}>
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Home
            </button>
          </Link>
        </li>

        <li className="nav-item" role="presentation">
          <Link to="/Manager/Supplier" style={{ textDecoration: "none" }}>
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Supplier Management{" "}
              {/* <font color="grey">Create Student</font>*/}
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export { MainNavigationSupplier };
