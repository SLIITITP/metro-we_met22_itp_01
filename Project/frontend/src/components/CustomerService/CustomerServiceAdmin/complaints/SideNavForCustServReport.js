import React from "react";
import { Link } from "react-router-dom";

export default function SideNavForCustServReport() {
  return (
    <div
      className="container"
      style={{
        top: "180px",
        float: "left",
        width: "15%",
        height: "100%",
        position: "fixed",
        paddingTop: "20px",
        marginLeft: "20px",
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
            to="/admin/customerservice/complaint"
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
              Complaint
            </button>
          </Link>

          <Link
            to="/admin/customerservice/transport"
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
              aria-selected="true"
              style={{ width: "100%" }}
            >
              Transport
            </button>
          </Link>
        </div>

        <div className="d-flex" style={{ height: "70px" }}>
          <div class="vr"></div>
        </div>
      </div>
    </div>
  );
}
