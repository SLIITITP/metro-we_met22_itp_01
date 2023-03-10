import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetOneInvoice(props) {
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/invoice/read/" + props.id)
      .then((Info) => {
        setInvoice(Info.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return invoice;
}
