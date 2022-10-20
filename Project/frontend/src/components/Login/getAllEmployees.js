import React, { Component, useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";

export default function GetEmployeeDetails() {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/employee/read")
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return employee;
}
