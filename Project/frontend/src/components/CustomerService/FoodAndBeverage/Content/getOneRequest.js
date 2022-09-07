import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetRequest(props) {
  const [request, setrequest] = useState([]);

  useEffect(() => {
    //useEffect is a react hook that calls itself when the page loads/reloads

    axios
      .get(
        "http://localhost:8070/customerService/foodAndBeverageRequest/get/" +
          props.id
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
