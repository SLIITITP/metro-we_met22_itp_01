import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import GetAmenityRequestDetails from "./getAmenityRequestDetails";

export default function FetchAmenityRequests() {
  var reqDetails = GetAmenityRequestDetails();
  const [search, setSearch] = useState("");

  let i = 0;

  const OnSubmit = (event, id) => {
    for (i = 0; i < reqDetails.length; i++) {
      if (reqDetails[i]._id == id) {
        break;
      }
    }
  };
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
            placeholder="Search Requests"
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
        <h1
          className="display-6"
          style={{ marginBottom: "80px", zIndex: "200" }}
        >
          All Amenity Requests
        </h1>
        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
              <th scope="col">Inventory ID</th>
              {/* <th scope="col">Manager ID</th> */}
              <th scope="col">Request ID</th>

              <th scope="col">Name</th>
              {/* <th scope="col">Name</th> */}
              <th scope="col">Quantity</th>
              <th scope="col">Requested On</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {reqDetails
              ? reqDetails
                  .filter((val) => {
                    if (search === "") return val;
                    else if (
                      val.invenID.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })

                  .map((val) => (
                    <tr key={val._id}>
                      <td>
                        <a
                          href={`/inventoryManagement/amenityRequestLog/getAmenityRequest/${val._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {val.invenID}
                        </a>
                      </td>
                      {/* <td>{val.managerID}</td> */}
                      <td>{val.reqID}</td>
                      <td>{val.reqType}</td>
                      {/* <td>{val.name}</td> */}
                      <td>{val.quantity}</td>
                      <td>{val.date}</td>
                      <td>{val.description}</td>
                      <td>{val.status}</td>
                      <td>
                        <a
                          className="btn btn-warning"
                          href={`amenityRequestLog/editRequest/${val._id}`}
                        >
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;&nbsp;
                        <a
                          className="btn btn-cancel"
                          style={{
                            backgroundColor: " #e60000",
                          }}
                        >
                          <i class="fa-sharp fa-solid fa-xmark"></i>&nbsp;Cancel
                        </a>
                        &nbsp;
                        {/* &nbsp;
                        <a
                          className="btn btn-danger"
                          onClick={(e) => Delete(val._id)}
                        >
                          <i className="far fa-trash-alt"></i>&nbsp;Cancel
                        </a>
                        &nbsp; */}
                      </td>
                    </tr>
                  ))
              : reqDetails}
          </tbody>
        </table>
        <button className="btn btn-success">
          <a
            href="/inventoryManagement/amenityRequestLog/createNewAmenityRequest"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add New Request
          </a>
        </button>
      </div>
    </>
  );
}
