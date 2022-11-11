import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetIngredientRequestDetails from "./getAllRequests";
//import GetOneIngredientRequest from "./getOneIngredientRequest";
export default function EditRequest() {
  const id = useParams();
  var z = id.id;
  var request = GetIngredientRequestDetails();
  // const [editRequest, setEditRequest] = useState({});
  var i = 0;
  var details = {};
  for (i = 0; i < request.length; i++) {
    if (request[i]._id === z) {
      details.reqID = request[i].reqID;
      details.invenID = request[i].invenID;
      details.reqType = request[i].reqType;
      details.name = request[i].name;
      details.quantity = request[i].quantity;

      details.date = request[i].date;
      details.description = request[i].description;
      break;
    }
  }
  console.log(z);
  const [reqId, setReqID] = useState("");
  const [invenID, setInventoryID] = useState("");
  const [reqType, setReqType] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  function updateRequest(e) {
    e.preventDefault();

    const editRequest = {
      reqID: request[i].reqID,
      invenID: request[i].invenID,
      reqType: request[i].reqType,
      name: request[i].name,
      quantity,
      //date: request[i].date,
      date,
      description,
    };

    let port = window.location.port;
    axios
      .put(
        "http://localhost:8070/inventory/managerRequest/update/" + z,
        editRequest
      )
      .then(() => {
        alert("Updated Successfully!");
        window.location.replace(
          `http://localhost:${port}/Manager/inventoryManagement/requestLog`
        );
      })
      .catch((err) => {
        console.log(err.message);
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
        onSubmit={updateRequest}
        style={{
          marginTop: "50px",
          marginLeft: "-50px",
          width: "100%",
        }}
      >
        <h1 className="display-6" style={{ marginBottom: "20px" }}>
          Edit Request
        </h1>
       
        <div className="mb-3">
          <label htmlFor="requestForRequestID" className="form-label">
            Request ID
          </label>
          <input
            type="text"
            id="reqID"
            name="reqID"
            className="form-control"
            readOnly
            value={details.reqID}
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
            readOnly
            className="form-control"
            placeholder="Enter inventory ID"
            value={details.invenID}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="requestForCategory" className="form-label">
            Choose Category
          </label>
          <input type="text" className="form-control" value={details.reqType} />
        </div>
       
        <div className="mb-3">
          <label htmlFor="requestForName" className="form-label">
            Ingredient Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            readOnly
            className="form-control"
            value={details.name}
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
            placeholder={details.quantity}
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
            id="date"
            name="requestedDate"
            //value={details.date}
            className="form-control"
            onChange={(e) => {
              setDate(e.target.value);
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
            placeholder={details.description}
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
            Update Request
          </a>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit" className="btn btn-danger">
          <a
            href="/Manager/inventoryManagement/requestLog"
            style={{ textDecoration: "none", color: "white", padding: "40px" }}
          >
            Cancel
          </a>
        </button>
      </form>
    </div>
  );
}
