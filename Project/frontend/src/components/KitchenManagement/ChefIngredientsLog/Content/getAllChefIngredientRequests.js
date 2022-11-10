import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function GetChefIngredientRequestDetails() {
  const [chefIngredientRequest, setChefIngredientRequest] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/inventory/chefRequest/getApproved")
      .then((res) => {
        setChefIngredientRequest(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return chefIngredientRequest;
}
