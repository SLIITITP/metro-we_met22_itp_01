import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetOneIngredientRequest(props) {
  const [ingredientRequest, setIngredientRequest] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/inventory/managerRequest/get" + props.id)
      .then((Info) => {
        setIngredientRequest(Info.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return ingredientRequest;
}
