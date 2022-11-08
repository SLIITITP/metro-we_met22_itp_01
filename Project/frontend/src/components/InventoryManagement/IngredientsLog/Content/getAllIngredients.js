import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function GetIngredientDetails() {
  const [ingredient, setIngredient] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/kitchenStock/")
      .then((res) => {
        setIngredient(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return ingredient;
}
