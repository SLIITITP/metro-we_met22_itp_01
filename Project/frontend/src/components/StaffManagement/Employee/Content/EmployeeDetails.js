import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetEmployeeDetails from "./GetAllEmployees";

export default function EmployeeDetails() {
  const id = useParams();
  var z = id.id;
  var employee = GetEmployeeDetails();
  var i = 0;
  var details = {};
  //var name = "";
  for (i = 0; i < employee.length; i++) {
    if (employee[i]._id == z) {
      details.ID = employee[i].empID;
      details.name = employee[i].name;
      details.designation = employee[i].designation;
      details.deptName = employee[i].deptName;
      details.hourlyPay = employee[i].hourlyPay;
      details.otRate = employee[i].otRate;
      details.NIC = employee[i].NIC;
      details.DOB = employee[i].DOB;
      details.gender = employee[i].gender;
      details.address = employee[i].address;
      details.email = employee[i].email;
      details.phone = employee[i].phone;
      break;
    }
  }

  return (
    <div
      className="container"
      style={{
        width: "50%",
        float: "center",
        marginTop: "30px",
        marginLeft: "215px",
        position: "sticky",
      }}
    >
      <h1 className="display-6" style={{ marginBottom: "20px", zIndex: "200" }}>
        Employee Details
      </h1>
      <table className="table">
        <tr>
          <th scope="col">Employee ID</th>
          <td>{details.ID}</td>
        </tr>
        <tr>
          <th scope="col">Employee Name</th>
          <td>{details.name}</td>
        </tr>
        <tr>
          <th scope="col">Designation</th>
          <td>{details.designation}</td>
        </tr>
        <tr>
          <th scope="col">Department</th>
          <td>{details.deptName}</td>
        </tr>
        <tr>
          <th scope="col">Hourly Pay</th>
          <td>{details.hourlyPay}</td>
        </tr>
        <tr>
          <th scope="col">OT Rate</th>
          <td>{details.otRate}</td>
        </tr>
        <tr>
          <th scope="col">NIC</th>
          <td>{details.NIC}</td>
        </tr>
        <tr>
          <th scope="col">DOB</th>
          <td>{details.DOB}</td>
        </tr>
        <tr>
          <th scope="col">Gender</th>
          <td>{details.gender}</td>
        </tr>
        <tr>
          <th scope="col">Address</th>
          <td>{details.address}</td>
        </tr>
        <tr>
          <th scope="col">Email</th>
          <td>{details.email}</td>
        </tr>
        <tr>
          <th scope="col">Phone</th>
          <td>{details.phone}</td>
        </tr>
      </table>
      <button className="btn btn-primary">
        <a
          href="/staffManagement/employees"
          style={{ textDecoration: "none", color: "white" }}
        >
          <i class="fa-solid fa-chevron-left"></i>&nbsp; Back
        </a>
      </button>
    </div>
  );
}
