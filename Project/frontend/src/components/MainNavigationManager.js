import React from "react";
import { Link } from "react-router-dom";

export default function MainNavigationManager() {
  return (
    <div
      className="container"
      style={{
        zIndex: "100",
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
          <Link to="/Manager" style={{ textDecoration: "none" }}>
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
              Staff Management
            </button>
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            to="/Manager/inventoryManagement"
            style={{ textDecoration: "none" }}
          >
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
              Inventory Management
            </button>
          </Link>
        </li>

        <li className="nav-item" role="presentation">
          <Link
            to="/Manager/supplierManagement"
            style={{ textDecoration: "none" }}
          >
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
              Supplier Management
            </button>
          </Link>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        ></div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          {/* ... */}
        </div>
        <div
          className="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabIndex="0"
        >
          {/* ... */}
        </div>
        <div
          className="tab-pane fade"
          id="disabled-tab-pane"
          role="tabpanel"
          aria-labelledby="disabled-tab"
          tabIndex="0"
        >
          {/* ... */}
        </div>
      </div>
    </div>
  );
}
