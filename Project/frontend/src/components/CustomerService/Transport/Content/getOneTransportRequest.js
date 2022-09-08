import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetRequest(props) {
  const [request, setrequest] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8070/customerService/transportRequest/get/" + props.id
      )
      .then((allInfo) => {
        setrequest(allInfo.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return request;
}
