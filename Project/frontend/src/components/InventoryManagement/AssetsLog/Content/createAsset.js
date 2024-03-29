import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetAssetDetails from "./getAllAssets";
export default function CreateAsset() {
  const [asset, setAsset] = useState({
    invenID: " ",
    availibilityStatus: " ",
    roomID: " ",
    category: " ",
    name: " ",
    description: " ",
    purchaseDate: " ",
  });

  const [invenID, setInventoryID] = useState("1");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [roomID, setRoomID] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [description, setDescription] = useState("");
  const [availibilityStatus, setAvailibilityStatus] = useState("");

  const assetList = GetAssetDetails();
  let j = assetList.length;
  let assetIDString;
  //let ID;
  console.log(assetList);
  j--;
  if (j >= 0) {
    let assetID = parseInt(assetList[j].invenID);
    assetID++;
    assetIDString = assetID.toString();
  } else {
    assetIDString = "1";
  }

  function addAsset(e) {
    e.preventDefault();

    var newAsset = {
      invenID,
      availibilityStatus,
      roomID,
      category,
      name,
      description,
      purchaseDate,
    };
    newAsset.invenID = assetIDString;
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
        alert("Property added successfully");
        window.location.replace(
          "http://localhost:3000/Manager/inventoryManagement/assetsLog"
        );
      })
      .catch((err) => {
        alert(err);
      });
  }

  //const [avail, setAvail] = useState();

  // function changeAvailibility(res) {
  //   if (res == "Upholstered Goods") {
  //     document.getElementById(avail).value = "Unavailable";
  //     setAvail("Unavailable");
  //   } else if (res == "Case Goods") {
  //     document.getElementById(avail).value = "Unavailable";
  //     setAvail("Unavailable");
  //   } else {
  //     document.getElementById(avail).value = "Available";
  //     setAvail("Available");
  //   }
  // }

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
            <option value="" selected>
              Property Name
            </option>
            <option id="opt1">{opt1}</option>
            <option id="opt2">{opt2}</option>
            <option id="opt3">{opt3}</option>
            <option id="opt4">{opt4}</option>
          </select>
        </div>
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
            href="/Manager/inventoryManagement/assetsLog"
            style={{ textDecoration: "none", color: "white" }}
          >
            Cancel
          </a>
        </button>
      </form>
    </div>
  );
}
