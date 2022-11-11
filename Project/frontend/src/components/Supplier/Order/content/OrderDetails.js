import React, { useEffect, useState } from "react";
import axios from "axios";
import GetOrder from "./GetOrder";
import GetOneOrder from "./GetOneOrder";
import "../../../../index.css";
import { useParams } from "react-router-dom";
import GetChefRequestDetails from "./getAllChefRequests";
import GetOneChefRequest from "./oneChefRequest";

export default function OrderDetails() {
  let allCRequest = GetChefRequestDetails();
  const [search, setSearch] = useState("");

  const id = useParams();
  var z = id.id;
  var order = GetOrder();
  var i = 0;
  var details = {};

  for (i = 0; i < order.length; i++) {
    if (order[i]._id === z) {
      details = order[i];
      break;
    }
  }

  let requestList = [];

  function display() {
    for (let k = 0; k < allCRequest.length; k++) {
      if (allCRequest[k].reqID === details.reqID) {
        requestList.push(allCRequest[k]);
      }
    }
  }

  display();

  return (
    <div
      className="container"
      style={{
        width: "40%",
        float: "left",
        marginTop: "50px",
        marginLeft: "300px",
        position: "sticky",
      }}
    >
      <h1
        className="display-6"
        style={{
          marginBottom: "20px",
          backgroundColor: "#0d6efd",
          color: "white",
          border: "2px solid black",
          padding: "10px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        Request Details
      </h1>

      {requestList
        ? requestList
            .filter((val) => {
              if (search === "") return val;
            })

            .map((val) => (
              <ul>
                <li class="list-group-item">Request ID : {val.reqID}</li>
                <hr></hr>
                <li class="list-group-item">Request Type : {val.reqType}</li>
                <hr></hr>
                <li class="list-group-item">Name : {val.name}</li>
                <hr></hr>
                <li class="list-group-item">Quantity : {val.quantity}</li>
                <hr></hr>
                <li class="list-group-item">Description : {val.description}</li>
                <hr></hr>
              </ul>
            ))
        : requestList}
    </div>
  );
}
