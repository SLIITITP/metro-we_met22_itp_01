import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function GetChefIngredientRequestDetails() {
  const [chefIngredientRequest, setChefIngredientRequest] = useState([]);
  //useEffect is a react hook that calls itself when the page loads/reloads
  useEffect(() => {
    axios
      .get("http://localhost:8070/inventory/chefRequest/")
      .then((res) => {
        setChefIngredientRequest(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []); //The square empty brackets is the syntax of react hook

  return chefIngredientRequest;
}
