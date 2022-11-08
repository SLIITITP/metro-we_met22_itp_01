import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetIngredientDetails from "./getAllIngredients";

export default function IngredientsDetails() {
  const id = useParams();
  var z = id.id;
  var ingredient = GetIngredientDetails();
  var i = 0;
  var details = {};
  var name = "";

  for (i = 0; i < ingredient.length; i++) {
    if (ingredient[i]._id == z) {
      details.invenID = ingredient[i].invenID;
      details.category = ingredient[i].category;
      details.quantity = ingredient[i].quantity;
      details.name = ingredient[i].name;
      details.description = ingredient[i].description;
      details.date = ingredient[i].date;
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
        Ingredient Details
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
