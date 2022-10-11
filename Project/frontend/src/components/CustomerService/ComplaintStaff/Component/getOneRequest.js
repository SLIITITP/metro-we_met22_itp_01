import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetOneRequest(props) {
  const [Request, setRequest] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/customerService/get/" + props.id)
      .then((Info) => {
        setRequest(Info.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return Request;
}
