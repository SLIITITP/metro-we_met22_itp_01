import React, { useEffect, useState } from "react";
import axios from "axios";
import GetSupplier from "./GetSupplier";

import GetOneSupplier from "./GetOneSupplier";
import { Link } from "react-router-dom";
import { ButtonHTMLAttributes } from "react";
import { Button } from "react-bootstrap";
import { jsPDF } from "jspdf";

export default function DisplaySupplier() {
  const createPDF = async () => {
    const date = new Date().toISOString().split("T")[0];
    const pdf = new jsPDF("landscape", "px", "a1", false);
    const data = await document.querySelector("#supplierPDF");
    pdf.html(data).then(() => {
      pdf.save("Supplier" + date + ".pdf");
    });
  };
  var color = "white";
  // var backgroundColor = "red";
  //  const [supplierList, setSupplierList] = useState([]);
  const supplierList = GetSupplier();

  const [search, setSearch] = useState("");

  function changeColor(data) {
    if (data === "Unavailable") color = "#ff726f";
    if (data === "Available") color = "white";
  }

  return (
    <div id="supplierPDF">
      <div
        className="container"
        style={{
          width: "100%",
          float: "right",
          marginTop: "50px",
          marginLeft: "200px",
          position: "sticky",
        }}
      >
        <div>
          <Link
            to="/Manager/Supplier/addsupplier"
            data-toggle="tooltip"
            data-placement="top"
            title="Add New Supplier"
            class="float-left"
            style={{
              backgroundColor: "#90EE90",
              borderBlockColor: "black",
              textDecoration: "none",
              fontSize: "25px",
              borderStyle: "double",
              color: "black",
              border: "2px solid black",
              padding: "10px",
              borderRadius: "30px",
            }}
          >
            &nbsp; &nbsp; Add Supplier &nbsp;&nbsp;&nbsp;
          </Link>
        </div>
        <div
          className="container"
          style={{
            marginBottom: "12px",
            float: "Right",
            width: "40%",
            marginRight: "-250px",
            position: "sticky",
          }}
        >
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={(e) => {
              setSearch(e.target.search.value);
              e.preventDefault();
            }}
          >
            <select
              className="form-control mr-sm-2"
              id="search"
              aria-label="Default select example"
              style={{
                backgroundColor: "#ededed",
                color: "#595959",
                borderColor: "black",
              }}
            >
              <option value="">Choose Supplier Type</option>
              <option value="Dry Rations">Dry Rations</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Dairy Products">Dairy Products</option>
              <option value="Spices">Spices</option>
              <option value="Cereals & Pulses">Cereals & Pulses</option>
              <option value="Meat">Meat</option>
              <option value="seaFood">seaFood</option>
              <option value="Other ">Other</option>
            </select>

            <button
              className="btn btn-primary"
              type="submit"
              style={{
                borderColor: "#1F51FF",
              }}
            >
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <h1 className="display-6" style={{ marginBottom: "20px" }}>
          All Supplier Details
        </h1>
        <br></br>
        <table className="table" style={{ width: "100%" }}>
          <thead>
            <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
              <th scope="col">SupplierID</th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Availability</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">ContactNo</th>
            </tr>
          </thead>
          <tbody>
            {supplierList
              ? supplierList
                  .filter((val) => {
                    if (search === "") return val;
                    else if (
                      val.type.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })

                  .map((val) => (
                    <tr key={val._id} onChange={changeColor(val.availability)}>
                      <td scope="row">{val.supplierID}</td>

                      <td>{val.name}</td>
                      <td>{val.type}</td>
                      <td style={{ backgroundColor: color }}>
                        {val.availability}
                      </td>
                      <td>{val.email}</td>
                      <td>{val.address}</td>
                      <td>{val.contactNo}</td>
                    </tr>
                  ))
              : supplierList}
          </tbody>
        </table>
      </div>
      <button onClick={createPDF}>Export</button>
    </div>
  );
}
