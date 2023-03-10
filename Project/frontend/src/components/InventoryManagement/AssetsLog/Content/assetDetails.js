import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetAssetDetails from "./getAllAssets";

export default function AssetDetails() {
  const id = useParams();
  var z = id.id;
  var asset = GetAssetDetails();
  var i = 0;
  var details = {};
  var name = "";

  for (i = 0; i < asset.length; i++) {
    if (asset[i]._id == z) {
      details.invenID = asset[i].invenID;
      details.category = asset[i].category;
      details.roomID = asset[i].roomID;
      details.name = asset[i].name;
      details.description = asset[i].description;
      details.date = asset[i].date;
      break;
    }
  }

  return (
    <div
      className="container"
      style={{
        width: "50%",
        float: "center",
        marginTop: "100px",
        marginLeft: "400px",
        position: "sticky",
      }}
    >
      <h1 className="display-6" style={{ marginBottom: "40px", zIndex: "200" }}>
        Property Details
      </h1>

      <table className="table">
        <tr>
          <th scope="col">Inventory ID</th>
          <td>{details.invenID}</td>
        </tr>
        <tr>
          <th scope="col">Category</th>
          <td>{details.category}</td>
        </tr>
        <tr>
          <th scope="col">Name</th>
          <td>{details.name}</td>
        </tr>
        <tr>
          <th scope="col">Room ID</th>
          <td>{details.roomID}</td>
        </tr>
        <tr>
          <th scope="col">Description</th>
          <td>{details.description}</td>
        </tr>
        <tr>
          <th scope="col">Purchased Date</th>
          <td>{details.date}</td>
        </tr>
      </table>
      <br></br>
    </div>
  );
}
