import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetOneChefRequest(props) {
  const [chefRequest, setChefRequest] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/inventory/chefRequest/get" + props.id)
      .then((Info) => {
        setChefRequest(Info.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return chefRequest;
}
