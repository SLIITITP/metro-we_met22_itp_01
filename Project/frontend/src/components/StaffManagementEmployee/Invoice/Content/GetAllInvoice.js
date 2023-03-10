import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function GetInvoiceDetails() {
  const [invoice, setInvoice] = useState([]);
  useEffect(() => {
    //useEffect is a react hook that calls itself when the page loads/reloads
    axios
      .get("http://localhost:8070/invoice/read")
      .then((res) => {
        setInvoice(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []); //The square empty brackets is the syntax of react hook

  return invoice;
}
