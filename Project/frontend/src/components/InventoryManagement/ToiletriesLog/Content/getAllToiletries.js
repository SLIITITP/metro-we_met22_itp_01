import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function GetToiletryDetails() {
  const [toiletry, setToiletry] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/toiletries/")
      .then((res) => {
        setToiletry(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return toiletry;
}
