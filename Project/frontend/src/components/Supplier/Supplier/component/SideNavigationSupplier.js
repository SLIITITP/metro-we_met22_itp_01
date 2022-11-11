import React from "react";
import { Link } from "react-router-dom";

function SideNavigationSupplier() {
  return (
    <div
      className="container"
      style={{
        top: "180px",
        float: "left",
        width: "10%",
        height: "40%",
        position: "fixed",
        paddingTop: "20px",

        marginLeft: "5px",
        backgroundColor: "white",
        listStyleType: "none",
        alignItems: "center",
        zIndex: "50",
      }}
    >
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <Link
            to="/Manager/supplier"
            style={{
              textDecoration: "none",
              color: "black",
              FontFace: "bold",
            }}
          >
            <button
              className="nav-link active"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              style={{ width: "100%" }}
            >
              Supplier
            </button>
          </Link>

          <Link
            to="/Manager/Review"
            style={{
              textDecoration: "none",
              color: "black",
              FontFace: "bold",
            }}
          >
            <button
              className="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              style={{ width: "100%" }}
            >
              Review
            </button>
          </Link>

          <Link
            to="/Manager/Order"
            style={{
              textDecoration: "none",
              color: "black",
              FontFace: "bold",
            }}
          >
            <button
              className="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              style={{ width: "100%" }}
            >
              Order
            </button>
          </Link>

          <Link
            to="/Manager/Order/fetch"
            style={{
              textDecoration: "none",
              color: "black",
              FontFace: "bold",
            }}
          >
            <button
              className="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              style={{ width: "100%" }}
            >
              Make A order
            </button>
          </Link>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="d-flex" style={{ height: "150px" }}>
            <div class="vr"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SideNavigationSupplier };
