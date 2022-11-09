import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetEmployeeDetails from "../../../StaffManagement/Employee/Content/GetAllEmployees";
import GetLeaveDetails from "./GetAllLeaves";

export default function LeaveDetails() {
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
        marginLeft: "250px",
        position: "sticky",
      }}
    >
      <h1 className="display-6" style={{ marginBottom: "40px", zIndex: "200" }}>
        Leaves Details
      </h1>

      <table
        className="table"
        style={{
          border: "2px solid ",
          borderColor: " #96D4D4",
        }}
      >
        <tr>
          <th
            scope="col"
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            Leave ID
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.ID}
          </td>
        </tr>
        <tr>
          <th
            scope="col"
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            Employee ID
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.empID}
          </td>
        </tr>
        <tr>
          <th
            scope="col"
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            Requested By{" "}
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.empName}
          </td>
        </tr>
        <tr>
          <th
            scope="col"
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            Date of Absence From{" "}
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.startDate}
          </td>
        </tr>
        <tr>
          <th
            scope="col"
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            Date of Absence To{" "}
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.endDate}
          </td>
        </tr>
        <tr>
          <th
            scope="col"
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            Number of Days{" "}
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.noOfDays}
          </td>
        </tr>
        <tr>
          <th
            scope="col"
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            Type
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.type}
          </td>
        </tr>
        <tr>
          <th
            scope="col"
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            Description
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.description}
          </td>
        </tr>
        <tr onChange={changeColor(details.status)}>
          <th
            scope="col"
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            Status
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
              color: color,
            }}
          >
            {details.status}
          </td>
        </tr>
        <tr>
          <th
            scope="col"
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            Reason Of Approval/Rejection{" "}
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.reasonOfStat}
          </td>
        </tr>
      </table>
      <button className="btn btn-primary">
        <a
          href="/staffManagement/manageLeaves"
          style={{ textDecoration: "none", color: "white" }}
        >
          <i class="fa-solid fa-chevron-left"></i>&nbsp; Back
        </a>
      </button>
      <br></br>
    </div>
  );
}
