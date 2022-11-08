import React, { useState } from "react";
import axios from "axios";
import GetIngredientDetails from "./getAllIngredients";
import { useParams } from "react-router-dom";

export default function EditIngredient() {
  const id = useParams();
  var z = id.id;
  var ingredient = GetIngredientDetails();
  var i = 0;
  var details = {};
  //var name = "";
  for (i = 0; i < ingredient.length; i++) {
    if (ingredient[i]._id === z) {
      details.invenID = ingredient[i].invenID;
      details.category = ingredient[i].category;
      details.quantity = ingredient[i].quantity;
      details.name = ingredient[i].name;
      details.description = ingredient[i].description;
      details.date = ingredient[i].date;
      break;
    }
  }

  console.log(z);
  const [invenID, setInventoryID] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [description, setDescription] = useState("");

  function updateData(e) {
    e.preventDefault();

    const EditIngredient = {
      invenID: ingredient[i].invenID,
      category,
      name: ingredient[i].name,
      quantity,
      purchaseDate: ingredient[i].purchaseDate,
      description,
    };

    let port = window.location.port;

    axios
      .put("http://localhost:8070/kitchenStock/update/" + z, EditIngredient)
      .then(() => {
        alert("Updated Successfully!");
        window.location.replace(
          `http://localhost:${port}/inventoryManagement/ingredientsLog`
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
          Edit Ingredient
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
        <div className="mb-3">
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
            placeholder={details.name}
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
            href="/inventoryManagement/ingredientsLog"
            style={{ textDecoration: "none", color: "white" }}
          >
            Cancel
          </a>
        </button>
      </form>
    </div>
  );
}
