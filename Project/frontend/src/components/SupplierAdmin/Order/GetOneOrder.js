import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetOneOrder(props) {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/order/get/" + props.id)
      .then((Info) => {
        setOrder(Info.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return order;
}
