import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import GetChefRequestDetails from "./getAllChefRequests";
import GetOneChefRequest from "./oneChefRequest";
export default function SupFetchChefRequests() {
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
  function ApproveRequest(id) {
    for (i = 0; i < reqDetails.length; i++) {
      if (reqDetails[i]._id == id) {
        break;
      }
    }

    requestID = reqDetails[i].requestID;

    <GetOneChefRequest id={id} />;
    setRequestCancel(GetOneChefRequest);
    requestCancel.status = "Approved";
    axios
      .put(
        "http://localhost:8070/inventory/chefRequest/update/" + id,
        requestCancel
      )
      .then((Info) => {
        alert("Request is Approved");
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
              <th></th>
              <th></th>
              <th></th>
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
                      <td>&nbsp;</td>
                      {val.status === "Pending" && (
                        <td>
                          <a
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Approve the request"
                            style={{
                              border: "none",
                              backgroundColor: "white",
                            }}
                            onClick={(e) => {
                              ApproveRequest(val._id);
                              window.location.reload(false);
                            }}
                          >
                            <i class="bi bi-check2-square"></i>
                          </a>
                        </td>
                      )}

                      {val.status === "Approved" && (
                        <td>
                          <a
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Make order"
                            style={{
                              border: "none",
                              backgroundColor: "white",
                            }}
                            href={`Manager/Order/add/${val._id}`}
                          >
                            <i class="bi bi-basket"></i>
                          </a>
                        </td>
                      )}
                    </tr>
                  ))
              : reqDetails}
          </tbody>
        </table>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </>
  );
}
