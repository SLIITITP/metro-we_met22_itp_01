import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import GetAmenityRequests from "../../../CustomerService/Amenity/Content/getAmenity";
import GetOneAmenity from "../../../CustomerService/Amenity/Content/getOneAmenity";
import GetInventoryAmenityRequests from "./getAllRequests";
export default function FetchRoomNecessityRequests() {
  var color = "black";
  var reqDetails = GetAmenityRequests();
  var amReqDetails = GetInventoryAmenityRequests();
  var id;
  var x = 0;
  var y = 0;
  var details = [];
  const [search, setSearch] = useState("");

  for (x = 0; x < reqDetails.length; x++) {
    for (y = 0; y < amReqDetails.length; y++) {
      if (amReqDetails[y].reqID == reqDetails[x].reqID) {
        details.push(reqDetails[x]);
        details.push(amReqDetails[y].note);
      }
    }
  }

  var final = [];
  var j = 0;
  for (j = 0; j < details.length; j++) {
    if (
      details[j].status === "Ongoing" ||
      details[j].status === "Approved" ||
      details[j].status === "Rejected"
    ) {
      final.push(details[j]);
    }
  }
  const [rejectRequest, setRejectRequest] = useState({});
  let i = 0;
  var requestID;
  const OnSubmit = (event, id) => {
    for (i = 0; i < reqDetails.length; i++) {
      if (reqDetails[i]._id == id) {
        break;
      }
    }
  };
  //to reject an ongoing request
  function rejectAmenityRequest(id) {
    for (i = 0; i < reqDetails.length; i++) {
      if (reqDetails[i]._id == id) {
        break;
      }
    }

    requestID = reqDetails[i].requestID;

    <GetOneAmenity id={id} />;
    setRejectRequest(GetOneAmenity);
    rejectRequest.status = "Rejected";
    axios
      .post(
        "http://localhost:8070/customerService/roomNecessityRequest/update/" +
          id,
        rejectRequest
      )
      .then(() => {
        alert("Updated Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  //to approve a pending request
  function approveRequest(id) {
    for (i = 0; i < reqDetails.length; i++) {
      if (reqDetails[i]._id == id) {
        break;
      }
    }

    requestID = reqDetails[i].requestID;

    <GetOneAmenity id={id} />;
    setRejectRequest(GetOneAmenity);

    rejectRequest.status = "Approved";

    axios
      .post(
        "http://localhost:8070/customerService/roomNecessityRequest/update/" +
          id,
        rejectRequest
      )
      .then(() => {
        alert("Updated Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function changeColor(data) {
    if (data === "Cancelled") color = "red";
    else if (data === "Approved") color = "green";
    else if (data === "Rejected") color = "red";
    else if (data === "Ongoing") color = "#0d6efd";
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
          All Room Necessity Requests
        </h1>
        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
              <th scope="col">Request ID</th>
              <th scope="col">Requested List</th>
              <th scope="col">Notes</th>
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
                      val.reqId.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })

                  .map((val) => (
                    <tr key={val._id} onChange={changeColor(val.status)}>
                      {/* <td>
                        <a
                          href={`http://localhost:8070/customerService/get/${val._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          
                        </a>
                      </td> */}
                      <td>{val.reqId}</td>
                      <td>{val.requestedItems}</td>
                      <td>{val.note}</td>
                      <td style={{ color: color }}>{val.status}</td>

                      <td>
                        {/* To show the approve button only if val.status==="Pending" or  val.status==="Rejected"*/}
                        {(val.status === "Ongoing" ||
                          val.status === "Rejected") && (
                          <a
                            style={{ color: "white" }}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Approve"
                            className="btn btn-sm btn-success"
                            onClick={(e) => {
                              approveRequest(val._id);
                              window.location.reload(false);
                            }}
                          >
                            <i className="fa-solid fa-check"></i>
                          </a>
                        )}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* To show the reject button only if val.status==="Pending" or  val.status==="Approved"*/}
                        {(val.status === "Ongoing" ||
                          val.status === "Approved") && (
                          <a
                            style={{ color: "white" }}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Reject"
                            className="btn btn-sm btn-danger"
                            onClick={(e) => {
                              rejectAmenityRequest(val._id);
                              window.location.reload(false);
                            }}
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </a>
                        )}
                      </td>
                    </tr>
                  ))
              : final}
          </tbody>
        </table>
        <br></br>
      </div>
    </>
  );
}
