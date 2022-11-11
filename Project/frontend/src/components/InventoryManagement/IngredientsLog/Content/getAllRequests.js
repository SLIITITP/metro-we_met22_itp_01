import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function GetIngredientRequestDetails() {
  const [ingredientRequest, setIngredientRequest] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/inventory/managerRequest/")
      .then((res) => {
        setIngredientRequest(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return ingredientRequest;
}
