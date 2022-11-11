import React, { useState } from "react";
import axios from "axios";
import GetIngredientDetails from "./getAllIngredients";
export default function CreateIngredients() {
  const [ingredient, setIngredient] = useState({
    invenID: " ",
    category: " ",
    name: " ",
    quantity: 0,
    purchaseDate: " ",
    description: " ",
  });

  const [invenID, setInventoryID] = useState("1");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [description, setDescription] = useState("");

  const ingList = GetIngredientDetails();
  let j = ingList.length;
  let ingIDString;
  //let ID;
  console.log(ingList);
  j--;
  if (j >= 0) {
    let ingID = parseInt(ingList[j].invenID);
    ingID++;
    ingIDString = ingID.toString();
  } else {
    ingIDString = "1";
  }
  function addIngredients(e) {
    e.preventDefault();
    //alert("Ingredients added successfully");

    var newIngredient = {
      invenID,
      category,
      name,
      quantity,
      purchaseDate,
      description,
    };
    newIngredient.invenID = ingIDString;
    // const newInventory = {
    //   invenID,
    //   name,
    //   purchaseDate,
    // };
    console.log(newIngredient);
    // console.log(newInventory);
    axios
      .post("http://localhost:8070/kitchenStock/add", newIngredient)
      .then(() => {
        alert("Ingredient added successfully");
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });

   //to clear out the form fields
    document.getElementById("name").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("purchaseDate").value = "";
    document.getElementById("description").value = "";
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
        onSubmit={addIngredients}
        style={{
          marginTop: "100px",
          marginLeft: "-50px",
          width: "100%",
        }}
      >
        <h1 className="display-6" style={{ marginBottom: "20px" }}>
          Add New Ingredient
        </h1>
      
        <div className="mb-3">
          <label htmlFor="requestForCategory" className="form-label">
            Choose Category
          </label>
          <select
            className="form-select"
            id="category"
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
            placeholder="Enter ingredient name"
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
            placeholder="Enter Quantity"
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
            placeholder="Do you wish to make a note on the ingredients"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit" className="btn btn-danger">
          <a
            href="/Manager/inventoryManagement/"
            style={{ textDecoration: "none", color: "white" }}
          >
            Cancel
          </a>
        </button>
      </form>
    </div>
  );
}
