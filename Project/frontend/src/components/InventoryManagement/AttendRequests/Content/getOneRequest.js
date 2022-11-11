import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetOneAmenity(props) {
  const [Amenity, setAmenity] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8070/customerService/roomNecessityRequest/get/" +
          props.id
      )
      .then((Info) => {
        setAmenity(Info.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return Amenity;
}
