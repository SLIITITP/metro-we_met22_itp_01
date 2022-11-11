import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetEmployeeDetails from "../../Employee/Content/GetAllEmployees";
import GetLeaveDetails from "./GetAllLeaves";

export default function ManagerLeaveDetails() {
  var color = "black";
  const id = useParams();
  var z = id.id;
  var employee = GetEmployeeDetails();
  var leave = GetLeaveDetails();
  var i = 0;
  var j = 0;
  var details = {};
  for (i = 0; i < leave.length; i++) {
    if (leave[i]._id == z) {
      details.ID = leave[i].leaveID;
      details.empID = leave[i].empID;
      for (j = 0; j < employee.length; j++) {
        if (employee[j].empID == leave[i].empID) {
          details.empName = employee[j].name;
        }
      }
      details.startDate = leave[i].startDate;
      details.endDate = leave[i].endDate;
      details.noOfDays = leave[i].noOfDays;
      details.type = leave[i].type;
      details.description = leave[i].description;
      details.status = leave[i].status;
      details.reasonOfStat = leave[i].reasonOfStat;
      break;
    }
  }

  function changeColor(data) {
    if (data === "Cancelled") color = "red";
    else if (data === "Approved") color = "green";
    else if (data === "Rejected") color = "red";
    else if (data === "Pending") color = "#0d6efd";
  }

  return (
    <div
      className="container"
      style={{
        width: "50%",
        float: "center",
        marginTop: "50px",
        marginLeft: "215px",
        position: "sticky",
      }}
    >
      <h1 className="display-6" style={{ marginBottom: "40px", zIndex: "200" }}>
        Leaves Details
      </h1>

      <table className="table">
        <tr>
          <th scope="col">Leave ID</th>
          <td>{details.ID}</td>
        </tr>
        <tr>
          <th scope="col">Employee ID</th>
          <td>{details.empID}</td>
        </tr>
        <tr>
          <th scope="col">Requested By </th>
          <td>{details.empName}</td>
        </tr>
        <tr>
          <th scope="col">Date of Absence From </th>
          <td>{details.startDate}</td>
        </tr>
        <tr>
          <th scope="col">Date of Absence To </th>
          <td>{details.endDate}</td>
        </tr>
        <tr>
          <th scope="col">Number of Days </th>
          <td>{details.noOfDays}</td>
        </tr>
        <tr>
          <th scope="col">Type</th>
          <td>{details.type}</td>
        </tr>
        <tr>
          <th scope="col">Description</th>
          <td>{details.description}</td>
        </tr>
        <tr onChange={changeColor(details.status)}>
          <th scope="col">Status</th>
          <td style={{ color: color }}>{details.status}</td>
        </tr>
        <tr>
          <th scope="col">Reason Of Approval/Rejection </th>
          <td>{details.reasonOfStat}</td>
        </tr>
      </table>
      <button className="btn btn-primary">
        <a
          href="/Manager/leave"
          style={{ textDecoration: "none", color: "white" }}
        >
          <i class="fa-solid fa-chevron-left"></i>&nbsp; Back
        </a>
      </button>
      <br></br>
    </div>
  );
}
