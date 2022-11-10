import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import GetChefRequestDetails from "./getAllChefRequests";
import GetOneChefRequest from "./oneChefRequest";
export default function FetchChefRequests() {
  var color = "black";
  var reqDetails = GetChefRequestDetails();

  var id;
  const [search, setSearch] = useState("");
  const [requestCancel, setRequestCancel] = useState({});
  const [editRequest, setEditRequest] = useState({});
  let i = 0;

  var requestID;
  const OnSubmit = (event, id) => {
    for (i = 0; i < reqDetails.length; i++) {
      if (reqDetails[i]._id == id) {
        break;
      }
    }
  };
  //to edit a pending request
  function EditRequest(id) {
    for (i = 0; i < reqDetails.length; i++) {
      if (reqDetails[i]._id == id) {
        break;
      }
    }
    <GetOneChefRequest id={id} />;
    setEditRequest(GetOneChefRequest);
  }

  // to cancel a pending request
  function CancelRequest(id) {
    for (i = 0; i < reqDetails.length; i++) {
      if (reqDetails[i]._id == id) {
        break;
      }
    }

    requestID = reqDetails[i].requestID;

    <GetOneChefRequest id={id} />;
    setRequestCancel(GetOneChefRequest);
    requestCancel.status = "Cancelled";
    axios
      .put(
        "http://localhost:8070/inventory/chefRequest/update/" + id,
        requestCancel
      )
      .then((Info) => {
        alert("Request for ingredients cancelled!");
        console.log(Info);
        // window.location.replace(
        //   `http://localhost:${port}/inventoryManagement/requestLog`
        // );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function changeColor(data) {
    if (data === "Cancelled") color = "red";
    else if (data === "Approved") color = "green";
    else if (data === "Rejected") color = "red";
    else if (data === "Pending") color = "#0d6efd";
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
          All Ingredient Requests
        </h1>
        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
              <th scope="col">Kitchen Ingredient ID</th>

              <th scope="col">Request ID</th>

              <th scope="col">Category</th>
              <th scope="col">Name</th>
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
                      val.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })

                  .map((val) => (
                    <tr key={val._id} onChange={changeColor(val.status)}>
                      <td>
                        <a
                          href={`/Staff/kitchenStaff/chefRequests/requestLog/getRequest${val._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {val.kitIngID}
                        </a>
                      </td>

                      <td>{val.reqID}</td>
                      <td>{val.reqType}</td>
                      <td>{val.name}</td>
                      <td>{val.quantity}</td>
                      <td>{val.date}</td>
                      <td>{val.description}</td>
                      <td style={{ color: color }}>{val.status}</td>
                      <td>
                        {/* To show the edit button only if val.status==="Pending" */}
                        {val.status === "Pending" && (
                          <a
                            title="Edit Ingredient Request"
                            className="btn btn-sm btn-warning"
                            href={`/Staff/kitchenStaff/chefRequests/requestLog/editRequest${val._id}`}
                            onClick={(e) => {
                              EditRequest(val._id);
                              window.location.reload(false);
                            }}
                          >
                            <i className="fas fa-edit"></i>
                            &nbsp;
                          </a>
                        )}
                        {/* <a
                          className="btn btn-sm btn-warning"
                          href={`requestLog/editRequest/${val._id}`}
                        >
                          <i className="fas fa-edit"></i>
                          &nbsp;
                        </a> */}
                        &nbsp;&nbsp;
                        {/* To show the cancel button only if val.status==="Pending */}
                        {val.status === "Pending" && (
                          <a
                            style={{ color: "white" }}
                            title="Cancel Ingredient Request"
                            className="btn btn-sm btn-danger"
                            onClick={(e) => {
                              CancelRequest(val._id);
                              window.location.reload(false);
                            }}
                          >
                            <i className="fa-regular fa-rectangle-xmark"></i>
                          </a>
                        )}
                        {/* <a
                          className="btn btn-cancel"
                          style={{
                            backgroundColor: " #e60000",
                          }}
                        >
                          <i class="fa-sharp fa-solid fa-xmark"></i>&nbsp;Cancel
                        </a> */}
                        &nbsp;
                      </td>
                    </tr>
                  ))
              : reqDetails}
          </tbody>
        </table>
        <button className="btn btn-success">
          <a
            href="/Staff/kitchenStaff/chefRequests/requestLog"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add New Request
          </a>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </>
  );
}
