import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function GetLeaveDetails() {
  const [leaves, setLeaves] = useState([]);
  useEffect(() => {
    //useEffect is a react hook that calls itself when the page loads/reloads
    axios
      .get("http://localhost:8070/leave/read")
      .then((res) => {
        setLeaves(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []); //The square empty brackets is the syntax of react hook

  return leaves;
}
