import React, { useState } from "react";
import axios from "axios";
import getRequest from "./getRequest";
import kandy from "./Kandy.png";
import lagoon from "./br.png";
import dambulla from "./DambullaCT.png";
import wilpattu from "./WilpattuNp.png";

let image = lagoon; //to store and display the image

export default function CreateTransportRequestCustomer() {
  //For TransportRequestRequest
  let reqIdString = "1";
  const reqList = getRequest();

  let email = JSON.parse(window.localStorage.getItem("currentUserID"));
  console.log(email);

  var obj = JSON.parse(window.localStorage.getItem("obj"));

  const [TransportRequest, setTransportRequest] = useState({
    reqId: "1",
    custID: email,
    route: obj.route,
    noOfSeats: 0,
    requestForDate: "",
    departureTime: obj.time,
    status: "Booked",
    busNo: obj.busNo,
    message: "None",
  });

  //Taking only the date from Date()
  var today = new Date();
  var year = today.getFullYear();
  var mes = today.getMonth() + 1;
  var dia = today.getDate();

  //Taking time without seconds
  var time = today
    .toLocaleTimeString("en-US", {
      hour12: false,
    })
    .replace(/(.*)\D\d+/, "$1");

  const fecha = year + "-" + mes + "-" + dia;

  const [Request, setRequest] = useState({
    reqId: "1",
    custId: email,
    serviceType: "TransportRequest",
    requestedOn: "",
    requestedtime: "",
    roomId: "1",
    notes: "",
    status: "Booked",
    busNo: obj.busNo,
    route: obj.route,
    bookingDate: "",
  });

  Request.requestedOn = fecha;
  Request.requestedtime = time;

  //To find the last id
  let j = reqList.length;
  j--;
  if (j >= 0) {
    let reqId = parseInt(reqList[j].reqId);
    reqId++;
    reqIdString = reqId.toString();
    // console.log(reqIdString);
    TransportRequest.reqId = reqIdString;
    Request.reqId = reqIdString;
  }

  //To create a record in the table
  function Create(e) {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8070/customerService/transportRequest",
        TransportRequest
      )
      .then(() => {
        alert("Transport Request Added Successfully");
      })
      .catch((err) => {
        console.log(err);
      });

    //To enter info into Customer Request Table
    axios
      .post("http://localhost:8070/customerService", Request)
      .then(() => {
        console.log("Transport Request Added");
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
    console.log(TransportRequest);
  }

  function changeImageFuncton() {
    if (obj.route === "Kandy") image = kandy;
    else if (obj.route === "Dambulla") image = dambulla;
    else if (obj.route === "Wilpattu") image = wilpattu;
    else image = lagoon;
  }
  changeImageFuncton();

  return (
    <div
      className="container"
      style={{
        width: "40%",
        position: "sticky",
      }}
    >
      <form
        style={{ marginTop: "100px", marginLeft: "-175px", width: "100%" }}
        onSubmit={Create}
      >
        <h1 className="display-6" style={{ marginBottom: "20px" }}>
          Transport Request
        </h1>
        <div className="mb-3">
          <img src={image} style={{ width: "300px", height: "300px" }} />
          <br />
        </div>

        <div className="mb-3">
          <label htmlFor="routes" className="form-label">
            Excursion To
          </label>
          <input
            type="text"
            id="busNo"
            name="busNo"
            className="form-control"
            value={obj.route}
            required
            readOnly
          />
        </div>

        <div className="mb-3">
          <label htmlFor="requestForDate" className="form-label">
            Reservation Date
          </label>
          <input
            type="date"
            id="schedule"
            name="schedule"
            className="form-control"
            required
            onChange={(e) => {
              setTransportRequest({
                ...TransportRequest,
                requestForDate: e.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="noOfSeats" className="form-label">
            Number Of Seats
          </label>
          <input
            type="number"
            min="1"
            max="5"
            id="seats"
            name="seats"
            className="form-control"
            required
            onChange={(event) => {
              setTransportRequest({
                ...TransportRequest,
                noOfSeats: event.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="departureTime" className="form-label">
            Bus No
          </label>
          <input
            type="text"
            id="busNo"
            name="busNo"
            className="form-control"
            value={obj.busNo}
            required
            readOnly
          />
        </div>

        <div className="mb-3">
          <label htmlFor="departureTime" className="form-label">
            Departure Time
          </label>
          <input
            type="text"
            id="time"
            name="time"
            className="form-control"
            value={obj.time}
            required
            readOnly
          />
        </div>

        <div className="mb-3">
          <label htmlFor="serviceType" className="form-label">
            Service Type
          </label>
          <select className="form-select" id="serviceType" required>
            <option value="TransportRequest">Resort Transport</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
