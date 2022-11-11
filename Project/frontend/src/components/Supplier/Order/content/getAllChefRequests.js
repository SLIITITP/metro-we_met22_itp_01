import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function GetChefRequestDetails() {
  const [chefRequest, setChefRequest] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/inventory/chefRequest/")
      .then((res) => {
        setChefRequest(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return chefRequest;
}
