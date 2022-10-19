import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetAllDrivers() {
  const [DriverRequest, setDriverRequest] = useState([]);

  useEffect(() => {
    //useEffect is a react hook that calls itself when the page loads/reloads
    axios
      .get("http://localhost:8070/customerService/transportDriver/")
      .then((allInfo) => {
        setDriverRequest(allInfo.data);
        console.log("Data retreived Successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []); //The square empty brackets is the syntax of react hook
  return DriverRequest;
}
