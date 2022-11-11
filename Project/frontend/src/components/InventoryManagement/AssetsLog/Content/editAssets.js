import React, { useState } from "react";
import axios from "axios";
import GetAssetDetails from "./getAllAssets";
import { useParams } from "react-router-dom";

export default function EditAsset() {
  const id = useParams();
  var z = id.id;
  var asset = GetAssetDetails();
  var i = 0;
  var details = {};

  for (i = 0; i < asset.length; i++) {
    if (asset[i]._id === z) {
      details.invenID = asset[i].invenID;
      details.category = asset[i].category;
      details.name = asset[i].name;
      details.roomID = asset[i].roomID;
      details.date = asset[i].date;
      details.description = asset[i].description;
      details.availibilityStatus = asset[i].availibilityStatus;

      break;
    }
  }

  console.log(z);
  // const [invenID, setInventoryID] = useState("");
  // const [category, setCategory] = useState("");
  // const [name, setName] = useState("");
  const [roomID, setRoomID] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [description, setDescription] = useState("");
  // const [availibilityStatus, setAvailibilityStatus] = useState("");
  let name = details.name;
  let category = details.category;
  let invenID = details.invenID;

  function updateData(e) {
    e.preventDefault();

    const EditAsset = {
      invenID,
      category,
      name,
      roomID: asset[i].roomID,
      purchaseDate: asset[i].purchaseDate,
      description,
      //availibilityStatus,
    };

    let port = window.location.port;

    axios
      .put("http://localhost:8070/assets/update/" + z, EditAsset)
      .then(() => {
        alert("Updated Successfully!");
        window.location.replace(
          `http://localhost:${port}/inventoryManagement/assetsLog`
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function changeDropdown() {
    var type = document.getElementById("category").value;
    if (type == "Attic Stock") {
      document.getElementById("roomID").style.visibility = "hidden";
    } else {
      document.getElementById("roomID").style.visibility = "visible";
    }
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
        onSubmit={updateData}
        style={{
          marginTop: "100px",
          marginLeft: "-50px",
          width: "100%",
        }}
      >
        <h1 className="display-6" style={{ marginBottom: "20px" }}>
          Edit Property
        </h1>
        <div className="mb-3">
          <label htmlFor="requestForinventoryID" className="form-label">
            Inventory ID
          </label>
          <input
            type="text"
            id="invenID"
            name="invenID"
            className="form-control"
            readOnly
            placeholder="Enter inventory ID"
            value={details.invenID}
            // onChange={(e) => {
            //   setInventoryID(e.target.value);
            // }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="requestForCategory" className="form-label">
            Choose Category
          </label>
          <input
            type="text"
            className="form-control"
            value={details.category}
          />
          {/* <select
            className="form-select"
            id="category"
            placeholder={details.category}
            aria-label="Default select example"
            onChange={(e) => {
              changeDropdown(e.target.value);
              setCategory(e.target.value);
            }}
            // onChange={(e) => {
            //
            // }}
          >
            <option value="">Choose Property Type </option>
            <option value="Case Goods">Case Goods</option>
            <option value="Upholstered Goods">Upholstered Goods</option>
            <option value="Attic Stock">Attic Stock</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="item" className="form-label">
            Propert Name
          </label>
          <select
            className="form-select"
            id="name"
            name="name"
            aria-label="Default select example"
            required
            placeholder={details.name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          >
            <option value="">Select Item</option>
            <option
              value=""
              style={{ fontWeight: "bold", fontStyle: "italic" }}
              disabled
            >
              --- Upholstered Goods ---
            </option>
            <option value="Chair">Chair</option>
            <option value="Couch">Couch</option>
            <option value="Sofa">Sofa</option>

            <option
              value=""
              style={{ fontWeight: "bold", fontStyle: "italic" }}
              disabled
            >
              --- Case Goods ---
            </option>
            <option value="Table">Table</option>
            <option value="Desk">Desk</option>
            <option value="Clothes Stand">Clothes Stand</option>
            <option value="Dressers">Dressers</option>
            <option value="Bed">Bed</option>

            <option
              value=""
              style={{ fontWeight: "bold", fontStyle: "italic" }}
              disabled
            >
              --- Attic Stock ---
            </option>
            <option value="chair">Chair</option>
            <option value="couch">Couch</option>
            <option value="Sofa">Sofa</option>
            <option value="table">Table</option>
            <option value="desk">Desk</option>
            <option value="Clothes Stan">Clothes Stand</option>
            <option value="Dressers">Dressers</option>
            <option value="Bed">Bed</option>
          </select> */}
        </div>
        {/* <div className="mb-3">
          <label htmlFor="requestForCategory" className="form-label">
            Choose Category
          </label>
          <select
            className="form-select"
            id="category"
            placeholder={details.category}
            aria-label="Default select example"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">Choose Property Type </option>
            <option value="Case Goods">Case Goods</option>
            <option value="Upholstered Goods">Upholstered Goods</option>
            <option value="Attic Stock">Attic Stock</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="requestForName" className="form-label">
            Property Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder={details.name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div> */}
        <div className="mb-3">
          <label htmlFor="requestForRoomID" className="form-label">
            Room ID
          </label>
          <input
            type="text"
            id="roomID"
            name="roomID"
            readOnly
            className="form-control"
            placeholder={details.roomID}
            onChange={(e) => {
              setRoomID(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="requestForAssignedDate" className="form-label">
            Date Assigned
          </label>
          <input
            type="date"
            id="purchaseDate"
            name="purchaseDate"
            value={details.date}
            className="form-control"
            onChange={(e) => {
              setPurchaseDate(e.target.value);
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
            placeholder={details.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Availibility Status
          </label>
          <select
            className="form-select"
            id="category"
            aria-label="Default select example"
            onChange={(e) => {
              setAvailibilityStatus(e.target.value);
            }}
            // onChange={(e) => {
            //
            // }}
          >
            <option value="">Choose Availibility </option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-danger">
          <a
            href="/inventoryManagement/assetsLog"
            style={{ textDecoration: "none", color: "white" }}
          >
            Cancel
          </a>
        </button>
      </form>
    </div>
  );
}
