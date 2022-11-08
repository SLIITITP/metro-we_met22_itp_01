import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetAmenityRequests from "./getAllRequests";

export default function AmenityRequestDetails() {
  const id = useParams();
  var z = id.id;
  var request = GetAmenityRequests();
  var i = 0;
  var details = {};
  var name = "";

  for (i = 0; i < request.length; i++) {
    if (request[i]._id == z) {
      details.reqId = request[i].reqId;
      details.requestedItems = request[i].requestedItems;
      details.note = request[i].note;
      break;
    }
  }

  return (
    <div
      className="container"
      style={{
        width: "50%",
        float: "center",
        marginTop: "100px",
        marginLeft: "400px",
        position: "sticky",
      }}
    >
      <h1 className="display-6" style={{ marginBottom: "40px", zIndex: "200" }}>
        Room Necessity Requests
      </h1>

      <table className="table">
        <tr>
          <th scope="col">Request ID</th>
          <td>{details.reqId}</td>
        </tr>
        <tr>
          <th scope="col">Requested List</th>
          <td>{details.requestedItems}</td>
        </tr>
        <tr>
          <th scope="col">Notes</th>
          <td>{details.note}</td>
        </tr>
      </table>
      <br></br>
    </div>
  );
}
