import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function GetAmenityRequestDetails() {
  const [amenityRequest, setAmenityRequest] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/inventory/amenityManagerRequest/")
      .then((res) => {
        setAmenityRequest(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return amenityRequest;
}
