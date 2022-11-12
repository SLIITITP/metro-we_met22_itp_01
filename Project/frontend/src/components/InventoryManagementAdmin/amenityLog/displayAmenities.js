import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import GetToiletryDetails from "../../InventoryManagement/ToiletriesLog/Content/getAllToiletries";
import { Button } from "react-bootstrap";
import {jsPDF} from "jspdf";
export default function DisplayToiletries() {

    const createPDF = async () => {
        const date = new Date().toISOString().split('T')[0];
        const pdf = new jsPDF("landscape", "px", "a1", false);
        const data = await document.querySelector("#amenities");
        pdf.html(data).then(() => {
            pdf.save("Amenity Report" + date + ".pdf");
        });
    };

  var toiletryDetails = GetToiletryDetails();
  const [search, setSearch] = useState("");

  let i = 0;

  const OnSubmit = (event, id) => {
    for (i = 0; i < toiletryDetails.length; i++) {
      if (toiletryDetails[i]._id == id) {
        break;
      }
    }
  };
  function Delete(id) {
    axios
      .delete("http://localhost:8070/toiletries/delete/" + id)
      .then((res) => {
        alert("Deleted successfully");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div
        className="container"
        style={{ float: "right", marginRight: "-700px" }}
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
            placeholder="Search amenities"
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
        }}
      >
        <div id="amenities">
        <h1
          className="display-6"
          style={{ marginBottom: "80px", zIndex: "200" }}
        >
          All Amenities
        </h1>
        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
              <th scope="col">Inventory ID</th>
              <th scope="col">Name</th>

              <th scope="col">Quantity</th>
              <th scope="col">Purchase Date</th>
              <th scope="col">Description</th>
              {/* <th scope="col">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {toiletryDetails
              ? toiletryDetails
                  .filter((val) => {
                    if (search === "") return val;
                    else if (
                      val.category.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })

                  .map((val) => (
                    <tr key={val._id}>
                      <td>
                        <a
                          href={`/Manager/inventoryManagement/toiletriesLog/getToiletry/${val._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {val.invenID}
                        </a>
                      </td>

                      <td>{val.category}</td>

                      <td>{val.quantity}</td>
                      <td>{val.date}</td>
                      <td>{val.description}</td>
                      <td>
                       
                       
                      </td>
                    </tr>
                  ))
              : toiletryDetails}
          </tbody>
        </table>
        <br></br>
       
      </div>
      <Button  onClick = {createPDF}>
        EXPORT
        </Button>
      </div>
    </>
  );
}
