import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetEmployeeDetails from "../../Employee/Content/GetAllEmployees";
import GetAttendanceDetails from "../../Attendance/Content/GetAllAttendance";
import GetLeaveDetails from "../../Leave/Content/GetAllLeaves";

export default function ManagerProfileDetails() {
  const id = useParams();
  var z = id.id;
  var employee = GetEmployeeDetails();
  var atten = GetAttendanceDetails();
  var leave = GetLeaveDetails();
  var i = 0;
  var details = {};

  for (i = 0; i < employee.length; i++) {
    if (
      employee[i].empID == JSON.parse(localStorage.getItem("currentUser")).empID
    ) {
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

  let noOfDaysPresent = 0;
  for (i = 0; i < atten.length; i++) {
    if (
      atten[i].empID == JSON.parse(localStorage.getItem("currentUser")).empID
    ) {
      noOfDaysPresent = noOfDaysPresent + 1;
    }
  }
  details.noOfDaysPresent = noOfDaysPresent;

  let noOfLeave = 0;
  for (i = 0; i < leave.length; i++) {
    if (
      leave[i].empID == JSON.parse(localStorage.getItem("currentUser")).empID &&
      leave[i].status === "Approved"
    ) {
      noOfLeave = noOfLeave + leave[i].noOfDays;
    }
  }
  details.noOfLeave = noOfLeave;

  return (
    <div
      className="container"
      style={{
        width: "50%",
        float: "center",
        marginTop: "30px",
        marginLeft: "230px",
        position: "sticky",
      }}
    >
      <h1 className="display-6" style={{ marginBottom: "20px", zIndex: "200" }}>
        Employee Details
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
            Employee ID
          </th>
          <td>{details.ID}</td>
        </tr>
        <tr>
          <th scope="col">Employee Name</th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.name}
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
            Designation
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.designation}
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
            Department
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.deptName}
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
            Hourly Pay
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.hourlyPay}
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
            OT Rate
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.otRate}
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
            No Of Days Worked
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.noOfDaysPresent}
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
            No Of Leave Taken
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.noOfLeave}
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
            NIC
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.NIC}
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
            DOB
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.DOB}
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
            Gender
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.gender}
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
            Address
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.address}
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
            Email
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.email}
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
            Phone
          </th>
          <td
            style={{
              border: "2px solid ",
              borderColor: " #96D4D4",
            }}
          >
            {details.phone}
          </td>
        </tr>
      </table>
    </div>
  );
}
