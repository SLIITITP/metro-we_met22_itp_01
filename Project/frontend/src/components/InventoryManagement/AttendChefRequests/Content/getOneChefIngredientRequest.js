import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetOneChefIngredientRequest(props) {
  const [chefIngredientRequest, setChefIngredientRequest] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/inventory/chefRequest/get" + props.id)
      .then((Info) => {
        setChefIngredientRequest(Info.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return chefIngredientRequest;
}
