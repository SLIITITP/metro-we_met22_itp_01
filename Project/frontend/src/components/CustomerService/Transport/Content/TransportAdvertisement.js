import React, { useState } from "react";
import axios from "axios";
import kandy from "./Kandy.png";
import kandyImage from "./kandyImage.jpeg";
import lagoon from "./br.png";
import dambulla from "./DambullaCT.png";
import dambullaImage from "./dambullaImage.jpg";
import wilpattu from "./WilpattuNp.png";
import wilpattuImage from "./WilpattuImage.jpg";
import { Link } from "react-router-dom";

export default function TransportAd() {
  const w = "w";
  const k = "k";
  const d = "d";

  const val = 22;

  function saveRouteStorage(route) {
    let obj = { route, time: "", busNo: "" };

    if (route === "Kandy") {
      obj.route = "Kandy";
      obj.time = "08:00";
      obj.busNo = "NC-5770";
    } else if (route === "Dambulla") {
      obj.route = "Dambulla";
      obj.time = "14:00";
      obj.busNo = "NC-5969";
    } else if (route === "Wilpattu") {
      obj.route = "Wilpattu";
      obj.time = "16:00";
      obj.busNo = "NF-6198";
    }

    localStorage.setItem("obj", JSON.stringify(obj));
  }

  return (
    <div className="container">
      <div
        className="card"
        style={{ width: "18rem", marginLeft: "250px", marginTop: "140px" }}
      >
        <img
          src={kandyImage}
          className="card-img-top"
          alt="Card image cap"
          style={{ height: "12rem", width: "18rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">Sacred City of Kandy</h5>
          <p className="card-text">
            Kandy, the cultural capital of Sri Lanka, a World Heritage Site sits
            pretty in a valley surrounded by rings of mountains, 115km away from
            the seaport of Colombo.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{ fontWeight: "bold" }}>
            Distance : 115 km
          </li>
          <li className="list-group-item" style={{ fontWeight: "bold" }}>
            Days : Monday - Friday
          </li>
          <li className="list-group-item" style={{ fontWeight: "bold" }}>
            Time : Tour starts at 08:00
          </li>
        </ul>
        <div className="card-body">
          <Link
            to={"booknow"}
            style={{
              textDecoration: "none",
              color: "black",
              FontFace: "bold",
            }}
          >
            <button
              type="button"
              class="btn btn-primary btn-sm"
              onClick={(e) => saveRouteStorage("Kandy")}
            >
              Book Now &nbsp;
              <i class="bi bi-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>

      <div
        className="card"
        style={{ width: "18rem", marginLeft: "575px", marginTop: "-508px" }}
      >
        <img
          src={dambullaImage}
          className="card-img-top"
          alt="Card image cap"
          style={{ height: "12rem", width: "18rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">Dambulla Cave Temple</h5>
          <p className="card-text">
            Dambulla cave temple also known as the Golden Temple of Dambulla is
            a World Heritage Site (1991) in Sri Lanka, situated in the central
            part of the country.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{ fontWeight: "bold" }}>
            Distance : 184.2 km
          </li>
          <li className="list-group-item" style={{ fontWeight: "bold" }}>
            Days : Monday - Friday
          </li>
          <li className="list-group-item" style={{ fontWeight: "bold" }}>
            Time : Tour starts at 14:00
          </li>
        </ul>
        <div className="card-body">
          <Link
            to={"booknow"}
            style={{
              textDecoration: "none",
              color: "black",
              FontFace: "bold",
            }}
          >
            <button
              type="button"
              class="btn btn-primary btn-sm"
              onClick={(e) => saveRouteStorage("Dambulla")}
            >
              Book Now &nbsp;
              <i class="bi bi-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>

      <div
        className="card"
        style={{ width: "18rem", marginLeft: "900px", marginTop: "-508px" }}
      >
        <img
          src={wilpattuImage}
          className="card-img-top"
          alt="Card image cap"
          style={{ height: "12rem", width: "18rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">Wilpattu National Park Safari</h5>
          <p className="card-text">
            Wilpattu National Park is located on the 30 kms north of Puttalam.
            Wilpattu Natonal Park is home for many villus, or natural lakes
            which dot the landscape in the Wilpattu National Park.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{ fontWeight: "bold" }}>
            Distance : 100 km
          </li>
          <li className="list-group-item" style={{ fontWeight: "bold" }}>
            Days : Monday - Friday
          </li>
          <li className="list-group-item" style={{ fontWeight: "bold" }}>
            Time : Tour starts at 16:00
          </li>
        </ul>
        <div className="card-body">
          <Link
            to={"booknow"}
            style={{
              textDecoration: "none",
              color: "black",
              FontFace: "bold",
            }}
          >
            <button
              type="button"
              class="btn btn-primary btn-sm"
              onClick={(e) => saveRouteStorage("Wilpattu")}
            >
              Book Now &nbsp;
              <i class="bi bi-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
