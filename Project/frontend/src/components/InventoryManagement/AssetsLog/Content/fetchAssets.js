import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import GetAssetDetails from "./getAllAssets";

export default function FetchAssets() {
  var assetDetails = GetAssetDetails();
  const [search, setSearch] = useState("");

  let i = 0;

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
                      val.invenID.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })

                  .map((val) => (
                    <tr key={val._id}>
                      <td>
                        <a
                          href={`/inventoryManagement/assetsLog/getAsset/${val._id}`}
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
                      <td>
                        {val.availibilityStatus}
                        {(() => {
                          if (val.category == "Upholstered Goods") {
                            return (val.availibilityStatus = "Not Available");
                          }
                          if (val.category == "Case Goods") {
                            return val.availibilityStatus;
                          } else {
                            return (val.availibilityStatus = "Available");
                          }
                        })()}
                      </td>

                      <td>
                        <a
                          className="btn btn-warning"
                          href={`/inventoryManagement/assetsLog/editAssets/${val._id}`}
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
                      </td>
                    </tr>
                  ))
              : assetDetails}
          </tbody>
        </table>
        <br></br>
        <button className="btn btn-success">
          <a
            href="/inventoryManagement/assetsLog/createAsset"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add New Property
          </a>
        </button>
      </div>
    </>
  );
}
