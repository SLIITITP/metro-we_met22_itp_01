import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import GetAssetDetails from "./getAllAssets";

export default function FetchAssets() {
  //var color = "black";
  var availStatus = "";
  var assetDetails = GetAssetDetails();
  const [search, setSearch] = useState("");
  //const [requestCancel, setRequestCancel] = useState({});

  let i = 0;
  var requestID;
  const OnSubmit = (event, id) => {
    for (i = 0; i < assetDetails.length; i++) {
      if (assetDetails[i]._id == id) {
        break;
      }
    }
  };
  

  function Delete(id) {
    axios
      .delete("http://localhost:8070/assets/delete/" + id)
      .then((res) => {
        alert("Deleted successfully");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function changeAvailibility(avail) {
    if (avail === "Attic Stock") availStatus = "Available";
    else if (avail === "Upholstered Goods") availStatus = "Unavailable";
    else if (avail === "Case Goods") availStatus = "Unavailable";
  }
  // function changeColor(data) {
  //   if (data === "Unavailable") color = "red";
  //   else if (data === "Available") color = "green";
  // }

  return (
    <>
      <div
        className="container"
        style={{ float: "right", marginRight: "-700px" }}
      >
        <form
          class="form-inline my-2 my-lg-0"
          onSubmit={(e) => {
            setSearch(e.target.search.value);
            e.preventDefault();
            e.window.location.reload(false);
          }}
        >
          <input
            class="form-control mr-sm-2"
            type="search"
            id="search"
            placeholder="Search Properties"
            aria-label="Search"
          />

          <button class="btn btn-primary my-2 my-sm-0" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
      <div
        className="container"
        style={{
          width: "70%",
          float: "center",
          marginTop: "100px",
        }}
      >
        <h1
          className="display-6"
          style={{ marginBottom: "80px", zIndex: "200" }}
        >
          All Properties
        </h1>
        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
              <th scope="col">Inventory ID</th>
              <th scope="col">Category</th>
              <th scope="col">Property Name</th>
              <th scope="col">Room ID</th>
              <th scope="col">Purchase Date</th>
              <th scope="col">Description</th>
              <th scope="col">Availibility Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {assetDetails
              ? assetDetails
                  .filter((val) => {
                    if (search === "") return val;
                    else if (
                      val.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })

                  .map((val) => (
                    <tr
                      key={val._id}
                      onChange={
                        changeAvailibility(val.category)
                        // changeColor(val.availStatus)
                      }
                    >
                      <td>
                        <a
                          href={`/Manager/inventoryManagement/assetsLog/getAsset/${val._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {val.invenID}
                        </a>
                      </td>

                      <td>{val.category}</td>
                      <td>{val.name}</td>
                      <td>{val.roomID}</td>
                      <td>{val.date}</td>
                      <td>{val.description}</td>

                      <td>{availStatus}</td>
                      {/* style={{ color: color }} */}
                      <td>
                        <a
                          className="btn btn-warning"
                          href={`/Manager/inventoryManagement/assetsLog/editAssets/${val._id}`}
                        >
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a
                          className="btn btn-danger"
                          onClick={(e) => Delete(val._id)}
                        >
                          <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       
                      </td>
                    </tr>
                  ))
              : assetDetails}
          </tbody>
        </table>
        <br></br>
        <button className="btn btn-success">
          <a
            href="/Manager/inventoryManagement/assetsLog/createAsset"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add New Property
          </a>
        </button>
      </div>
    </>
  );
}
