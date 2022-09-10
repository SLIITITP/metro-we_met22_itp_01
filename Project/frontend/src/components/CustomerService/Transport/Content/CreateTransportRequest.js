import React, { useState } from "react";
import axios from "axios";
import getRequest from "./getRequest";

export default function CreateTransportRequestCustomer() {
  //For TransportRequestRequest
  let reqIdString = "1";
  const reqList = getRequest();

  const [TransportRequest, setTransportRequest] = useState({
    reqId: "1",
    status: "Ongoing",
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
    custId: "1",
    serviceType: "TransportRequest",
    requestedOn: "",
    requestedtime: "",
    roomId: "1",
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

  //Function to set Time based on Route
  function setTransport(data) {
    if (data === "Route1") TransportRequest.departureTime = "08:00";
    else if (data === "Route2") TransportRequest.departureTime = "16:00";
    else if (data === "Route3") TransportRequest.departureTime = "14:00";

    document.getElementById("time").value = TransportRequest.departureTime;
  }

  //To create a record in the table
  function Create(e) {
    e.preventDefault();

    TransportRequest.departureTime = document.getElementById("time").value;

    axios
      .post(
        "http://localhost:8070/customerService/transportRequest",
        TransportRequest
      )
      .then(() => {
        alert("Request Added Successfully");
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });

    //To enter info into Customer Request Table
    axios
      .post("http://localhost:8070/customerService", Request)
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }

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
          <label htmlFor="requestForDate" className="form-label">
            Scheduled For
          </label>
          <input
            type="date"
            id="schedule"
            name="schedule"
            className="form-control"
            required
            onChange={(event) => {
              setTransportRequest({
                ...TransportRequest,
                requestForDate: event.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="routes" className="form-label">
            Routes
          </label>
          <select
            className="form-select"
            id="routes"
            aria-label="Default select example"
            required
            onChange={(event) => {
              setTransportRequest({
                ...TransportRequest,
                route: event.target.value,
              });
              setTransport(event.target.value);
            }}
          >
            <option value="">Choose Route</option>
            <option value="Route1">Route 1</option>
            <option value="Route2">Route 2</option>
            <option value="Route3">Route 3</option>
          </select>
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
            required
            readOnly
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
