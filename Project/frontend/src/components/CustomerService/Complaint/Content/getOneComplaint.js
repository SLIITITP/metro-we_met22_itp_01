import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetRequest(props) {
  const [complaint, setComplaint] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/customerService/complaint/get/" + props.id)
      .then((Info) => {
        setComplaint(Info.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return complaint;
}
