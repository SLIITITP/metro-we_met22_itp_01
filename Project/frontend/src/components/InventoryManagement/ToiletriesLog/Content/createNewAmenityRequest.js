import React, { useState } from "react";
import axios from "axios";

export default function CreateNewAmenityRequest() {
  // const [managerID, setManagerID] = useState("");
  const [reqID, setReqID] = useState("");
  const [invenID, setInventoryID] = useState("");
  const [reqType, setReqType] = useState("");
  //const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setRequestedDate] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  function addNewAmenityRequests(e) {
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
          "http://localhost:3000/inventoryManagement/amenityRequestLog"
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
        onSubmit={addNewAmenityRequests}
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
            onChange={(e) => {
              setReqID(e.target.value);
            }}
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
            onChange={(e) => {
              setInventoryID(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Choose Category
          </label>
          <select
            className="form-select"
            id="category"
            name="category"
            onChange={(e) => {
              setReqType(e.target.value);
            }}
            aria-label="Default select example"
            // required
          >
            <option value="">Select Amenity</option>

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
            <option value="Soap">Soap</option>
            <option value="Dental Kit">Dental Kit</option>
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
            <option value="Shampoo">Shampoo</option>
            <option value="Conditioner">Conditioner</option>
            <option value="Slipper">Slipper</option>
          </select>
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
            onChange={(e) => {
              setName(e.target.value);
            }}
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
            href="/inventoryManagement/amenityRequestLog"
            style={{ textDecoration: "none", color: "white", padding: "40px" }}
          >
            Cancel
          </a>
        </button>
      </form>
    </div>
  );
}
