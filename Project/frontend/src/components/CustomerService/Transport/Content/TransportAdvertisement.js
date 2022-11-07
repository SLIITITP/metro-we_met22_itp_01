import React, { useState } from "react";
import axios from "axios";
import kandy from "./Kandy.png";
import kandyImage from "./kandyImage.jpeg";
import lagoon from "./br.png";
import dambulla from "./DambullaCT.png";
import dambullaImage from "./dambullaImage.jpg";
import wilpattu from "./WilpattuNp.png";
import wilpattuImage from "./WilpattuImage.jpg";

export default function TransportAd() {
  return (
    <div className="container">
      <div
        className="card"
        style={{ width: "18rem", marginLeft: "150px", marginTop: "140px" }}
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>

      <div
        className="card"
        style={{ width: "18rem", marginLeft: "475px", marginTop: "-508px" }}
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>

      <div
        className="card"
        style={{ width: "18rem", marginLeft: "800px", marginTop: "-508px" }}
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
}
