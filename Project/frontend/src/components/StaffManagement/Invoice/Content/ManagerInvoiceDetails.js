import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetEmployeeDetails from "../../Employee/Content/GetAllEmployees";
import GetInvoiceDetails from "./GetAllInvoice";
import { jsPDF } from "jspdf";

export default function ManagerInvoiceDetails() {
  const createPDF = async () => {
    const date = new Date().toISOString().split("T")[0];
    const pdf = new jsPDF("landscape", "px", "a1", false);
    const data = await document.querySelector("#invoice");
    pdf.html(data).then(() => {
      pdf.save("Invoice " + date + ".pdf");
    });
  };
  const id = useParams();
  var z = id.id;
  var employee = GetEmployeeDetails();
  var invoice = GetInvoiceDetails();
  var i = 0;
  var j = 0;
  var details = {};
  for (i = 0; i < invoice.length; i++) {
    if (invoice[i]._id == z) {
      details.ID = invoice[i].invoiceID;
      details.empID = invoice[i].empID;
      for (j = 0; j < employee.length; j++) {
        if (employee[j].empID == invoice[i].empID) {
          details.empName = employee[j].name;
        }
      }
      details.date = invoice[i].date;
      details.workingHours = invoice[i].workingHours;
      details.shiftHours = invoice[i].shiftHours;
      details.otHours = invoice[i].otHours;
      details.amount = invoice[i].amount;
      details.dedAmount = invoice[i].dedAmount;
      details.dedReason = invoice[i].dedReason;
      details.allowance = invoice[i].allowance;
      details.netSalary = invoice[i].netSalary;
      break;
    }
  }

  return (
    <>
      <div
        className="container"
        id="invoice"
        style={{
          width: "50%",
          float: "center",
          marginTop: "50px",
          marginLeft: "230px",
          position: "sticky",
        }}
      >
        <h1
          className="display-6"
          style={{ marginBottom: "40px", zIndex: "200" }}
        >
          Payment_Invoice
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
              Invoice ID
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
              Employee Name
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
              Invoice For
            </th>
            <td
              style={{
                border: "2px solid ",
                borderColor: " #96D4D4",
              }}
            >
              {details.date}
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
              Total Hours
            </th>
            <td
              style={{
                border: "2px solid ",
                borderColor: " #96D4D4",
              }}
            >
              {details.workingHours}
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
              Shift Hours
            </th>
            <td
              style={{
                border: "2px solid ",
                borderColor: " #96D4D4",
              }}
            >
              {details.shiftHours}
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
              Ot Hours
            </th>
            <td
              style={{
                border: "2px solid ",
                borderColor: " #96D4D4",
              }}
            >
              {details.otHours}
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
              Amount
            </th>
            <td
              style={{
                border: "2px solid ",
                borderColor: " #96D4D4",
              }}
            >
              {details.amount}
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
              Deduction
            </th>
            <td
              style={{
                border: "2px solid ",
                borderColor: " #96D4D4",
              }}
            >
              {details.dedAmount}
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
              Reason For Deduction
            </th>
            <td
              style={{
                border: "2px solid ",
                borderColor: " #96D4D4",
              }}
            >
              {details.dedReason}
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
              Allowance
            </th>
            <td
              style={{
                border: "2px solid ",
                borderColor: " #96D4D4",
              }}
            >
              {details.allowance}
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
              Net Salary
            </th>
            <td
              style={{
                border: "2px solid ",
                borderColor: " #96D4D4",
              }}
            >
              {details.netSalary}
            </td>
          </tr>
        </table>
      </div>
      <div
        className="container"
        style={{
          width: "50%",
          float: "center",
          marginTop: "50px",
          marginLeft: "280px",
          position: "sticky",
        }}
      >
        <button className="btn btn-primary">
          <a
            href="/Manager/invoice"
            style={{ textDecoration: "none", color: "white" }}
          >
            <i class="fa-solid fa-chevron-left"></i>&nbsp; Back
          </a>
        </button>
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <button className="btn btn-primary" onClick={createPDF}>
          Print Invoice
        </button>
        <br></br>
        <br></br>
      </div>
    </>
  );
}
