import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetToiletryDetails from "./getAllToiletries";

export default function ToiletryDetails() {
  const id = useParams();
  var z = id.id;
  var toiletry = GetToiletryDetails();
  var i = 0;
  var details = {};
  //var name = "";

  for (i = 0; i < toiletry.length; i++) {
    if (toiletry[i]._id == z) {
      details.invenID = toiletry[i].invenID;
      details.category = toiletry[i].category;
      details.quantity = toiletry[i].quantity;
      //details.name = toiletry[i].name;
      details.description = toiletry[i].description;
      details.date = toiletry[i].date;
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
        Amenity Details
      </h1>

      <table className="table">
        <tr>
          <th scope="col">Inventory ID</th>
          <td>{details.invenID}</td>
        </tr>
        <tr>
          <th scope="col">Name</th>
          <td>{details.category}</td>
        </tr>
        {/* <tr>
          <th scope="col">Name</th>
          <td>{details.name}</td>
        </tr> */}
        <tr>
          <th scope="col">quantity</th>
          <td>{details.quantity}</td>
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
