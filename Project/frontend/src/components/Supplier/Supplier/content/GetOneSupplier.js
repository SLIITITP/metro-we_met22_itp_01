import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetOneSupplier(props) {
  const [supplier, setSupplier] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/supplier/get/" + props.id)
      .then((Info) => {
        setSupplier(Info.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return supplier;
}
