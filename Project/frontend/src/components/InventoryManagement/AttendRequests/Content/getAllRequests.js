import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetInventoryAmenityRequests() {
  const [AmenityRequests, setAmenityRequests] = useState([]);

  useEffect(() => {
    //useEffect is a react hook that calls itself when the page loads/reloads
    axios
      .get("http://localhost:8070/customerService/roomNecessityRequest")
      .then((allInfo) => {
        setAmenityRequests(allInfo.data);
        console.log("Data retrieved Successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []); //The square empty brackets is the syntax of react hook
  return AmenityRequests;
}
