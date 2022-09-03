import React from "react";
import { Link } from "react-router-dom";

function SideNavigationFoodAndBeverage() {
  return (
    <div
      className="container"
      style={{
        top: "180px",
        float: "left",
        width: "15%",
        height: "35%",
        position: "fixed",
        paddingTop: "20px",
        marginLeft: "20px",
        marginLeft: "5px",
        backgroundColor: "white",
        // "background-color": "#f1f1f1",
        // border: "1px solid #555",
        listStyleType: "none",
        alignItems: "center",
        "z-index": "50",
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
            to="/customerService"
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
              Food & Beverage
            </button>
          </Link>

          <Link
            to="/customerService/trainer"
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
              Trainer
            </button>
          </Link>

          <Link
            to="/customerService"
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
              aria-selected="false"
              style={{ width: "100%" }}
            >
              Transport
            </button>
          </Link>

          <Link
            to="/customerService"
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
              Amenity
            </button>
          </Link>

          <Link
            to="/customerService"
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
              aria-selected="false"
              style={{ width: "100%" }}
            >
              Complaint
            </button>
          </Link>

          <Link
            to="/customerService"
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
              aria-selected="false"
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
          <div className="d-flex" style={{ height: "230px" }}>
            <div className="vr"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SideNavigationFoodAndBeverage };
