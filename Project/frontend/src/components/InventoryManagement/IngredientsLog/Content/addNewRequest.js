import React, { useState } from "react";
import axios from "axios";

export default function CreateNewRequest() {
  // const [managerID, setManagerID] = useState("");
  const [reqID, setReqID] = useState("");
  const [invenID, setInventoryID] = useState("");
  const [reqType, setReqType] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setRequestedDate] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  function addNewRequests(e) {
    e.preventDefault();

    const newRequest = {
      //managerID,
      reqID,
      invenID,
      reqType,
      name,
      quantity,
      date,
      description,
      status,
    };
    console.log(newRequest);
    axios
      .post("http://localhost:8070/inventory/managerRequest/add", newRequest)
      .then(() => {
        alert("request made successfully");
        window.location.replace(
          "http://localhost:3000/inventoryManagement/requestLog"
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
        onSubmit={addNewRequests}
        style={{
          marginTop: "50px",
          marginLeft: "-50px",
          width: "100%",
        }}
      >
        <h1 className="display-6" style={{ marginBottom: "20px" }}>
          Request Ingredient
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
          <label htmlFor="requestForCategory" className="form-label">
            Choose Category
          </label>
          <select
            className="form-select"
            id="reqType"
            aria-label="Default select example"
            onChange={(e) => {
              setReqType(e.target.value);
            }}
          >
            <option value="">Choose Ingredient Type </option>
            <option value="Dry Rations">Dry Rations</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy Products">Dairy Products</option>
            <option value="Spices">Spices</option>
            <option value="Cereals & Pulses">Cereals & Pulses</option>
            <option value="Meat">Meat</option>
            <option value="seaFood">seaFood</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="requestForName" className="form-label">
            Ingredient Name
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
        </div>
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
            href="/inventoryManagement/requestLog"
            style={{ textDecoration: "none", color: "white", padding: "40px" }}
          >
            Cancel
          </a>
        </button>
      </form>
    </div>
  );
}
