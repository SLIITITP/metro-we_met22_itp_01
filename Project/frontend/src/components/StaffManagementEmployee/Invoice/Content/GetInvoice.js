import React, { useState } from "react";
import axios from "axios";
import { renderMatches } from "react-router-dom";
import GetInvoiceDetails from "./GetAllInvoice";
//import { Link } from "react-router-dom";

export default function GetInvoice() {
  var invoiceDetails = GetInvoiceDetails();

  const [search, setSearch] = useState("");

  let i = 0;

  return (
    <>
      <div
        className="container"
        style={{ float: "right", marginRight: "-900px" }}
      >
        <form
          class="form-inline my-2 my-lg-0"
          onSubmit={(e) => {
            setSearch(e.target.search.value);
            e.preventDefault();
            e.window.location.reload(false);
          }}
        >
          <input
            class="form-control mr-sm-2"
            type="search"
            id="search"
            placeholder="Search Date"
            aria-label="Search"
          />

          <button class="btn btn-primary my-2 my-sm-0" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>

      <div
        className="container"
        style={{
          width: "70%",
          float: "center",
          marginTop: "100px",
          marginLeft: "215px",
          position: "sticky",
        }}
      >
        <h1
          className="display-6"
          style={{ marginBottom: "80px", zIndex: "200" }}
        >
          Payment Invoice
        </h1>

        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
              <th scope="col">Invoice ID</th>
              <th scope="col">Emp ID</th>
              <th scope="col">Date</th>
              <th scope="col">WorkingHours</th>
              <th scope="col">Shift Hours</th>
              <th scope="col">Ot Hours</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {invoiceDetails
              ? invoiceDetails
                  .filter((val) => {
                    if (search === "") return val;
                    else if (
                      val.date.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((val) => (
                    <tr key={val._id}>
                      <td>{val.invoiceID}</td>
                      <td>{val.empID}</td>
                      <td>{val.date}</td>
                      <td>{val.workingHours}</td>
                      <td>{val.shiftHours}</td>
                      <td>{val.otHours}</td>
                      <td>{val.amount}</td>
                      <td>
                        <a
                          data-toggle="tooltip"
                          data-placement="top"
                          title="View"
                          className="btn btn-sm btn-primary"
                          href={`/Staff/staffManagementEmployee/invoice/getInvoice/${val._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <i className="fa-regular fa-eye"></i>
                        </a>
                      </td>
                    </tr>
                  ))
              : invoiceDetails}
          </tbody>
        </table>
      </div>
    </>
  );
}
