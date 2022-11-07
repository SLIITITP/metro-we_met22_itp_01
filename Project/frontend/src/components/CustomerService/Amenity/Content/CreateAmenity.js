import React, { useState } from "react";
import axios from "axios";
import getRequest from "./getRequest";

export default function CreateAmenityCustomer() {
  const reqList = getRequest();

  let email = JSON.parse(window.localStorage.getItem("currentUserID"));
  console.log(email);

  const [AmenityRequest, setAmenityRequest] = useState({
    reqId: "1",
    custID: email,
    status: "Ongoing",
    requestedItems: "",
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
    custId: email,
    serviceType: "RoomNecessityRequest",
    requestedOn: "",
    requestedtime: "",
    roomId: "1",
    notes: "",
    status: "Ongoing",
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
    if (document.getElementById("requestedItem").value === "") {
      alert("Please Add items into the Request List");
      window.location.reload(false);
    } else {
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
  }

  var itemList = "";

  function EnterReq() {
    if (document.getElementById("item").value !== "") {
      if (itemList === "")
        itemList = document.getElementById("item").value + ", \n";
      else itemList += document.getElementById("item").value + ", \n";

      document.getElementById("requestedItem").value = itemList;

      var a = AmenityRequest;
      a.requestedItems = itemList;
      setAmenityRequest(a);
    }
  }

  function ClearList() {
    document.getElementById("requestedItem").value = "";
    itemList = "";
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
          <label htmlFor="item" className="form-label">
            Item
          </label>
          <select
            className="form-select"
            id="item"
            name="item"
            aria-label="Default select example"
            required
          >
            <option value="">Select Item into List</option>
            <option
              value=""
              style={{ fontWeight: "bold", fontStyle: "italic" }}
              disabled
            >
              --- Furniture Items ---
            </option>
            <option value="Extra Desk">Extra Desk</option>
            <option value="Extra Bed">Extra Bed</option>
            <option value="Extra Table">Extra Table</option>
            <option value="Clothes Stand">Clothes Stand</option>
            <option
              value=""
              style={{ fontWeight: "bold", fontStyle: "italic" }}
              disabled
            >
              --- Personal Care ---
            </option>
            <option value="Combs">Combs</option>
            <option value="Shaving Cream">Shaving Cream</option>
            <option value="Razor">Razor</option>
            <option value="Tissue Box">Tissue Box</option>
            <option value="Blankets">Blankets</option>
            <option value="Hair Dryer">Hair Dryer</option>
            <option
              value=""
              style={{ fontWeight: "bold", fontStyle: "italic" }}
              disabled
            >
              --- Bath Needs ---
            </option>
            <option value="Bath Caps">Bath Caps</option>
            <option value="Towels">Towels</option>
            <option value="Bath Robe">Bath Robe</option>
            <option value="Slipper">Slipper</option>
          </select>
        </div>

        <div className="mb-3">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={EnterReq}
          >
            Add
            <i className="bi bi-plus-circle" style={{ marginLeft: "5px" }}></i>
          </button>
          &emsp;
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={ClearList}
          >
            Clear List
            <i className="bi bi-x-circle" style={{ marginLeft: "5px" }}></i>
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
            disabled
            onChange={(event) => {
              setAmenityRequest({
                ...AmenityRequest,
                requestedItems: event.target.value,
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
              setRequest({
                ...Request,
                notes: event.target.value,
              });
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
