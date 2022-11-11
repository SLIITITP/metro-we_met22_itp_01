import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetIngredientRequestDetails from "./getAllRequests";

export default function IngredientsRequestDetails() {
  const id = useParams();
  var z = id.id;
  var ingredient = GetIngredientRequestDetails();
  var i = 0;
  var details = {};
  var name = "";

  for (i = 0; i < ingredient.length; i++) {
    if (ingredient[i]._id == z) {
      // details.managerID = ingredient[i].managerID;
      details.reqID = ingredient[i].reqID;
      details.invenID = ingredient[i].invenID;
      details.reqType = ingredient[i].reqType;
      details.quantity = ingredient[i].quantity;
      details.name = ingredient[i].name;
      details.date = ingredient[i].date;
      details.description = ingredient[i].description;
      details.status = ingredient[i].status;
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
        Request Details
      </h1>

      <table className="table">
        {/* <tr>
          <th scope="col">Manager ID</th>
          <td>{details.managerID}</td>
        </tr> */}
        <tr>
          <th scope="col">Request ID</th>
          <td>{details.reqID}</td>
        </tr>
        <tr>
          <th scope="col">Inventory ID</th>
          <td>{details.invenID}</td>
        </tr>
        <tr>
          <th scope="col">Category</th>
          <td>{details.reqType}</td>
        </tr>
        <tr>
          <th scope="col">Name</th>
          <td>{details.name}</td>
        </tr>
        <tr>
          <th scope="col">quantity</th>
          <td>{details.quantity}</td>
        </tr>
        <tr>
          <th scope="col">Requested On</th>
          <td>{details.date}</td>
        </tr>
        <tr>
          <th scope="col">Description</th>
          <td>{details.description}</td>
        </tr>
        <tr>
          <th scope="col">Status</th>
          <td>{details.status}</td>
        </tr>
      </table>
      <br></br>
    </div>
  );
}
