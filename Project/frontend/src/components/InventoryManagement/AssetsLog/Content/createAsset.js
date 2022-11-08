import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function CreateAsset() {
  const [invenID, setInventoryID] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [roomID, setRoomID] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [description, setDescription] = useState("");
  const [availibilityStatus, setAvailibilityStatus] = useState("");

  function addAsset(e) {
    e.preventDefault();
    //alert("Ingredients added successfully");

    const newAsset = {
      invenID,
      availibilityStatus,
      roomID,
      category,
      name,
      description,
      purchaseDate,
    };

    // const newInventory = {
    //   invenID,
    //   name,
    //   purchaseDate,
    // };
    console.log(newAsset);
    // console.log(newInventory);
    axios
      .post("http://localhost:8070/assets/add", newAsset)
      .then(() => {
        //window.location.reload(false);
        alert("Property and Inventory added successfully");
        window.location.replace(
          "http://localhost:3000/inventoryManagement/assetsLog"
        );
      })
      .catch((err) => {
        alert(err);
      });

    // axios
    //   .post("http://localhost:8080/inventory/add", newInventory)
    //   .then(() => {
    //     alert("Property and Inventory added successfully");
    //     window.location.replace(
    //       "http://localhost:3000/inventoryManagement/assetsLog"
    //     );
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
  }

  function changeDropdown() {
    var type = document.getElementById("category").value;
    if (type == "Attic Stock") {
      document.getElementById("roomID").style.visibility = "hidden";
    } else {
      document.getElementById("roomID").style.visibility = "visible";
    }
  }
  const [opt1, setopt1] = useState();
  const [opt2, setopt2] = useState();
  const [opt3, setopt3] = useState();
  const [opt4, setopt4] = useState();

  function setOptions(propertyType) {
    if (propertyType == "Upholstered Goods") {
      document.getElementById("opt1").value = "Chair";
      document.getElementById("opt2").value = "Couch";
      document.getElementById("opt3").value = "Sofa";
      document.getElementById("opt4").value = "Dressers";
      setopt1("Chair");
      setopt2("Couch");
      setopt3("Sofa");
      setopt4("Dressers");
    } else if (propertyType == "Case Goods") {
      document.getElementById("opt1").value = "Table";
      document.getElementById("opt2").value = "Desk";
      document.getElementById("opt3").value = "Clothes Stand";
      document.getElementById("opt4").value = "Bed";
      setopt1("Table");
      setopt2("Desk");
      setopt3("Clothes Stand");
      setopt4("Bed");
    } else if (propertyType == "Attic Stock") {
      document.getElementById("opt1").value = "Table";
      document.getElementById("opt2").value = "Desk";
      document.getElementById("opt3").value = "Clothes Stand";
      document.getElementById("opt4").value = "Bed";
      setopt1("Table");
      setopt2("Desk");
      setopt3("Clothes Stand");
      setopt4("Bed");
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
        onSubmit={addAsset}
        style={{
          marginTop: "100px",
          marginLeft: "-50px",
          width: "100%",
        }}
      >
        <h1 className="display-6" style={{ marginBottom: "20px" }}>
          Add New Property
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
            id="category"
            aria-label="Default select example"
            onChange={(e) => {
              changeDropdown(e.target.value);
              setCategory(e.target.value);
              setOptions(e.target.value);
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
            onChange={(e) => {
              setName(e.target.value);
            }}
          >
            {/* <option value="">Select Item</option>
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
            <option value="" selected>
              Property Name
            </option>
            <option id="opt1">{opt1}</option>
            <option id="opt2">{opt2}</option>
            <option id="opt3">{opt3}</option>
            <option id="opt4">{opt4}</option>
          </select>
        </div>
        {/* <div className="mb-3">
          <label htmlFor="requestForName" className="form-label">
            Property Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter property name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div> */}
        <div className="mb-3" id="myCode">
          <label htmlFor="requestForRoomID" className="form-label">
            Room ID
          </label>

          <input
            type="text"
            //disabled="disabled"
            id="roomID"
            name="roomID"
            className="form-control"
            placeholder="Enter Room ID"
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
            placeholder="Do you wish to make a note on the properties"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
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
