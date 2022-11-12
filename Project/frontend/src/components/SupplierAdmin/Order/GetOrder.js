import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetOrder() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/order")
      .then((allInfo) => {
        setOrders(allInfo.data);
        console.log("Data retreived Successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return orders;
}
