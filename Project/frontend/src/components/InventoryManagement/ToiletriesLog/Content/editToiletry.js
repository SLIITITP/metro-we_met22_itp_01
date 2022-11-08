import React, { useState } from "react";
import axios from "axios";
import GetToiletryDetails from "./getAllToiletries";
import { useParams } from "react-router-dom";

export default function EditToiletry() {
  const id = useParams();
  var z = id.id;
  var toiletry = GetToiletryDetails();
  var i = 0;
  var details = {};
  //var name = "";
  for (i = 0; i < toiletry.length; i++) {
    if (toiletry[i]._id === z) {
      details.invenID = toiletry[i].invenID;
      details.category = toiletry[i].category;
      details.quantity = toiletry[i].quantity;
      // details.name = toiletry[i].name;
      details.description = toiletry[i].description;
      details.date = toiletry[i].date;
      break;
    }
  }

  console.log(z);
  const [invenID, setInventoryID] = useState("");
  const [category, setCategory] = useState("");
  //const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [description, setDescription] = useState("");

  function updateData(e) {
    e.preventDefault();

    const EditToiletry = {
      invenID: toiletry[i].invenID,
      category,
      //name: toiletry[i].name,
      quantity,
      purchaseDate: toiletry[i].purchaseDate,
      description,
    };

    let port = window.location.port;

    axios
      .put("http://localhost:8070/toiletries/update/" + z, EditToiletry)
      .then(() => {
        alert("Updated Successfully!");
        window.location.replace(
          `http://localhost:${port}/inventoryManagement/toiletriesLog`
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
        onSubmit={updateData}
        style={{
          marginTop: "100px",
          marginLeft: "-50px",
          width: "100%",
        }}
      >
        <h1 className="display-6" style={{ marginBottom: "20px" }}>
          Edit Amenity
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
            onChange={(e) => {
              setInventoryID(e.target.value);
            }}
          />
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
            <option value="">Choose Amenity Type </option>
            <option value="Toiletries">Toiletries</option>
            <option value="Personal Care">Personal care</option>
            <option value="coffee Kit">Coffee Kit</option>
          </select>
        </div> */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Choose Category
          </label>
          <select
            className="form-select"
            id="category"
            name="category"
            placeholder={details.category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            aria-label="Default select example"
            required
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
        {/* <div className="mb-3">
          <label htmlFor="requestForName" className="form-label">
            Amenity Name
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
          <label htmlFor="requestForQuantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="form-control"
            placeholder={details.quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="requestForpurchaseDate" className="form-label">
            Purchase Date
          </label>
          <input
            type="date"
            id="purchaseDate"
            name="purchaseDate"
            className="form-control"
            value={details.date}
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
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit" className="btn btn-danger">
          <a
            href="/inventoryManagement/toiletriesLog"
            style={{ textDecoration: "none", color: "white" }}
          >
            Cancel
          </a>
        </button>
      </form>
    </div>
  );
}
