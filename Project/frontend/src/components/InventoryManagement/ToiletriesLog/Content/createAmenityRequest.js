import React, { useState } from "react";
import axios from "axios";
import GetToiletryDetails from "./getAllToiletries";
import { useParams } from "react-router-dom";

export default function CreateAmenityRequest() {
  // const [managerID, setManagerID] = useState("");
  const [reqID, setReqID] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setRequestedDate] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  let allAmenities = GetToiletryDetails();

  const id = useParams();
  var z = id.id;
  var i = 0;

  var details = {};
  //var name = "";
  for (i = 0; i < allAmenities.length; i++) {
    if (allAmenities[i]._id === z) {
      details.invenID = allAmenities[i].invenID;
      details.category = allAmenities[i].category;
      details.quantity = allAmenities[i].quantity;
      // details.name = allAmenities[i].name;
      details.description = allAmenities[i].description;
      details.date = allAmenities[i].date;
      break;
    }
  }
  // let name = details.name;
  let reqType = details.category;
  let invenID = details.invenID;

  function addRequests(e) {
    e.preventDefault();

    const newRequest = {
      //managerID,
      reqID,
      invenID,
      reqType,
      //name,
      quantity,
      date,
      description,
      status,
    };
    console.log(newRequest);
    axios
      .post(
        "http://localhost:8070/inventory/amenityManagerRequest/add",
        newRequest
      )
      .then(() => {
        alert("request made successfully");
        window.location.replace(
          "http://localhost:3000/Manager/inventoryManagement/amenityRequestLog"
        );
        // window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
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
        onSubmit={addRequests}
        style={{
          marginTop: "50px",
          marginLeft: "-50px",
          width: "100%",
        }}
      >
        <h1 className="display-6" style={{ marginBottom: "20px" }}>
          Request Amenity
        </h1>
        {/* <div className="mb-3">
          <label htmlFor="requestFormanagerID" className="form-label">
            Manager ID
          </label>
          <input
            type="text"
            id="managerID"
            name="managerID"
            className="form-control"
            placeholder="Enter Manager ID"
            onChange={(e) => {
              setManagerID(e.target.value);
            }}
          />
        </div> */}
        <div className="mb-3">
          <label htmlFor="requestForRequestID" className="form-label">
            Request ID
          </label>
          <input
            type="text"
            id="reqID"
            name="reqID"
            className="form-control"
            placeholder="Enter Request ID"
            onChange={(e) => setReqID(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="requestForinventoryID" className="form-label">
            Inventory ID
          </label>
          <input
            type="text"
            id="invenID"
            name="invenID"
            className="form-control"
            placeholder="Enter inventory ID"
            value={details.invenID}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="requestForCategory" className="form-label">
            Amenity Name
          </label>
          <input
            type="text"
            className="form-control"
            value={details.category}
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="requestForName" className="form-label">
            Amenity Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={details.name}
          />
        </div> */}
        <div className="mb-3">
          <label htmlFor="requestForQuantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="form-control"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="requestForRequestedDate" className="form-label">
            Requested On
          </label>
          <input
            type="date"
            id="requestedDate"
            name="requestedDate"
            className="form-control"
            onChange={(e) => {
              setRequestedDate(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            cols="50"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          <a
            // href="/inventoryManagement/requestLog"
            style={{ textDecoration: "none", color: "white", padding: "40px" }}
          >
            Submit Request
          </a>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit" className="btn btn-danger">
          <a
            href="/Manager/inventoryManagement/toiletriesLog"
            style={{ textDecoration: "none", color: "white", padding: "40px" }}
          >
            Cancel
          </a>
        </button>
      </form>
    </div>
  );
}
