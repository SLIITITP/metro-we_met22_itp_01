import React, { useState } from "react";
import axios from "axios";
import GetToiletryDetails from "./getAllToiletries";

export default function CreateToiletry() {
  const [toiletry, setToiletry] = useState({
    invenID: " ",
    category: " ",
    quantity: " ",
    purchaseDate: " ",
    description: " ",
  });

  const [invenID, setInventoryID] = useState("1");
  const [category, setCategory] = useState("");
  //const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [description, setDescription] = useState("");

  const toiletryList = GetToiletryDetails();
  let j = toiletryList.length;
  let toiletryIDString;
  //let ID;
  console.log(toiletryList);
  j--;
  if (j >= 0) {
    let toiletryID = parseInt(toiletryList[j].invenID);
    toiletryID++;
    toiletryIDString = toiletryID.toString();
  } else {
    toiletryIDString = "1";
  }

  function addToiletries(e) {
    e.preventDefault();

    var newToiletry = {
      invenID,
      category,
      quantity,
      purchaseDate,
      description,
    };
    newToiletry.invenID = toiletryIDString;
    // const newInventory = {
    //   invenID,

    //   purchaseDate,
    // };
    console.log(newToiletry);
    // console.log(newInventory);
    axios
      .post("http://localhost:8070/toiletries/add", newToiletry)
      .then(() => {
        //window.location.reload(false);
        alert("Amenity and Inventory added successfully");
        window.location.replace(
          "http://localhost:3000/Manager/inventoryManagement/toiletriesLog"
        );
      })
      .catch((err) => {
        alert(err);
      });
    // axios
    //   .post("http://localhost:8080/inventory/add", newInventory)
    //   .then(() => {
    //     alert("Amenity and Inventory added successfully");
    //     window.location.replace(
    //       "http://localhost:3000/inventoryManagement/toiletriesLog"
    //     );
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
    // To clear out the form fields
    document.getElementById("invenID").value = "";
    //document.getElementById("name").value = "";
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
        onSubmit={addToiletries}
        style={{
          marginTop: "100px",
          marginLeft: "-50px",
          width: "100%",
        }}
      >
        <h1 className="display-6" style={{ marginBottom: "20px" }}>
          Add New Amenity
        </h1>
        {/* <div className="mb-3">
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
        </div> */}
        {/* <div className="mb-3">
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
            <option value="">Choose Amenity Type </option>
            <option value="Toiletries">Toiletries</option>
            <option value="Personal Care">Personal care</option>
            <option value="coffee Kit">Coffee Kit</option>
          </select>
        </div> */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Choose Amenity
          </label>
          <select
            className="form-select"
            id="category"
            name="category"
            onChange={(e) => {
              setCategory(e.target.value);
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
            placeholder="Enter ingredient name"
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
            required
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
            required
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
            placeholder="Do you wish to make a note on the amenities"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-danger">
          <a
            href="/Manager/inventoryManagement/toiletriesLog"
            style={{ textDecoration: "none", color: "white" }}
          >
            Cancel
          </a>
        </button>
      </form>
    </div>
  );
}
