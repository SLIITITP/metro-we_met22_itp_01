import React from "react";
import { Link } from "react-router-dom";

export default function SideNavigationParkAdmin() {
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
          style={{ backgroundColor: "white" }}
        >
          <Link
            to="/admin/addPark"
            style={{
              textDecoration: "none",
              color: "black",
              FontFace: "bold",
            }}
          >
            <button
              className="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
              style={{ width: "100%" }}
            >
              Add Zones
            </button>
          </Link>

          <Link
            to="/admin/parkreport"
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
              Reports
            </button>
          </Link>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            tabIndex="0"
          ></div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
            tabIndex="0"
          ></div>
          <div
            className="tab-pane fade"
            id="v-pills-disabled"
            role="tabpanel"
            aria-labelledby="v-pills-disabled-tab"
            tabIndex="0"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
            tabIndex="0"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
            tabIndex="0"
          >
            ...
          </div>
          <div className="d-flex" style={{ height: "280px" }}>
            <div className="vr"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
