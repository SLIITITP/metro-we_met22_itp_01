import React, { useState } from "react";
import axios from "axios";
import getRequest from "./getRequest";

export default function CreateAmenityCustomer() {
  const reqList = getRequest();

  // reqId: { type: String, required: true, unique: true },
  // status: String,
  // requestedItem: String,
  //note: String
  const [requestedItem, setRequestedItem] = useState("");

  const [AmenityRequest, setAmenityRequest] = useState({
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

  //To update the request table date and time when a Amenity Request is created
  const [Request, setRequest] = useState({
    reqId: "1",
    custId: "1",
    serviceType: "RoomNecessityRequest",
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
    reqId = reqId.toString();

    AmenityRequest.reqId = reqId;
    Request.reqId = reqId;
  }

  //To create a record in the table
  function Create(e) {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8070/customerService/roomNecessityRequest",
        AmenityRequest
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

  //To set the options based on service type

  const [opt1, setopt1] = useState();
  const [opt2, setopt2] = useState();
  const [opt3, setopt3] = useState();
  const [opt4, setopt4] = useState();

  function setOptions(type) {
    if (type === "Furnitures") {
      document.getElementById("opt1").value = "Extra Desk";
      document.getElementById("opt2").value = "Extra Bed";
      document.getElementById("opt3").value = "Extra Table";
      document.getElementById("opt4").value = "Clothes Stand";

      setopt1("Extra Desk");
      setopt2("Extra Bed");
      setopt3("Extra Table");
      setopt4("Clothes Stand");
    } else if (type === "Personal Care") {
      document.getElementById("opt1").value = "Combs"; // as in dangerous driving
      document.getElementById("opt2").value = "Shaving Cream";
      document.getElementById("opt3").value = "Razor";
      document.getElementById("opt4").value = "Hair Dryer";
      setopt1("Combs"); // as in dangerous driving
      setopt2("Shaving Cream");
      setopt3("Razor");
      setopt4("Hair Dryer");
    } else if (type === "Bath Needs") {
      document.getElementById("opt1").value = "Bath Caps";
      document.getElementById("opt2").value = "Towels";
      document.getElementById("opt3").value = "Bath Robe";
      document.getElementById("opt4").value = "Slipper";

      setopt1("Bath Caps");
      setopt2("Towels");
      setopt3("Bath Robe");
      setopt4("Slipper");
    } else if (type === "") {
      //For others
      setopt1("");
      setopt2("");
      setopt3("");
      setopt4("");
    }
  }

  var selectedItem = "";
  const [array, setArray] = useState([]);

  function EnterReq() {
    selectedItem = document.getElementById("item").value;
    if (selectedItem !== "") {
      setArray((state) => [...state, selectedItem]);
    }
  }

  function RemoveFunction() {
    array.pop();
    var textBox = "";

    if (array.length === 0) {
      textBox = "";
      document.getElementById("requestedItem").value = textBox;
    }

    for (var i = 0; i < array.length; i++) {
      textBox += array[i] + "\n";
      document.getElementById("requestedItem").value = textBox;
    }
  }
  var textBox = "";

  for (var i = 0; i < array.length; i++) {
    textBox += array[i] + "\n";
    document.getElementById("requestedItem").value = textBox;
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
          Room Necessity Requests
        </h1>

        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Item Category
          </label>
          <select
            className="form-select"
            id="type"
            aria-label="Default select example"
            required
            name="type"
            onChange={(event) => setOptions(event.target.value)}
          >
            <option value="">Choose Item Type</option>
            <option value="Furnitures">Furnitures</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Bath Needs">Bath Needs</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Item
          </label>
          <select
            className="form-select"
            id="item"
            name="item"
            aria-label="Default select example"
            required
          >
            <option value="">For</option>
            <option id="opt1">{opt1}</option>
            <option id="opt2">{opt2}</option>
            <option id="opt3">{opt3}</option>
            <option id="opt4">{opt4}</option>
          </select>
        </div>

        <div className="mb-3">
          <button
            type="button"
            class="btn btn-outline-success"
            onClick={EnterReq}
          >
            Add
            <i class="bi bi-plus-circle" style={{ marginLeft: "5px" }}></i>
          </button>
          &emsp;
          <button
            type="button"
            class="btn btn-outline-danger"
            onClick={RemoveFunction}
          >
            Remove
            <i class="bi bi-x-circle" style={{ marginLeft: "5px" }}></i>
          </button>
        </div>

        <div className="mb-3">
          <label htmlFor="requestedItem" className="form-label">
            Requested Items
          </label>
          <textarea
            className="form-control"
            id="requestedItem"
            name="requestedItem"
            rows="3"
            cols="50"
            placeholder="No Items Selected"
            required
            readOnly
            onChange={(event) => {
              setAmenityRequest({
                ...AmenityRequest,
                requestedItem: event.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="note" className="form-label">
            Notes
          </label>
          <textarea
            className="form-control"
            id="note"
            name="note"
            rows="6"
            cols="50"
            placeholder="Let us know more so that we can help you"
            onChange={(event) => {
              setAmenityRequest({
                ...AmenityRequest,
                note: event.target.value,
              });
            }}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
