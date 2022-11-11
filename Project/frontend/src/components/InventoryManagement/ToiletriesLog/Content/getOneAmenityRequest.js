import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetOneAmenityRequest(props) {
  const [amenityRequest, setAmenitytRequest] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/toiletries/get" + props.id)
      .then((Info) => {
        setAmenitytRequest(Info.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return amenityRequest;
}
