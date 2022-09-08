import React, { useEffect, useState } from "react";
import axios from "axios";
import getTransportRequest from "./getTransportRequest";
import { Container } from "../js/Container";
import "../../../../index.css";
import GetOneTransportRequest from "./getOneTransportRequest";
import Trigger from "../Component/popOver";

export default function ShowTransportRequest() {
  var color = "black"; //for the status field in the table
  const transportList = getTransportRequest();

  //For the search button
  const [search, setSearch] = useState("");

  //To store all details in TransportRequest and update and display data
  const [TransportRequest, setTransportRequest] = useState({});

  let i = 0;
  const OnSubmit = (event, id) => {
    for (i; i < transportList.length; i++) {
      if (transportList[i]._id == id) {
        break;
      }
    }

    //Setting up TransportRequest so that we can update it using the update Route
    setTransportRequest(transportList[i]);
    TransportRequest.noOfSeats = event.target.numberOfSeats.value;

    axios
      .post(
        "http://localhost:8070/customerService/transportRequest/update/" + id,
        TransportRequest
      )
      .then(() => {
        alert("Update Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //To delete a transport request created
  function DeleteItem(id) {
    axios
      .delete("http://localhost:8070/customerService/transportRequest/" + id)
      .then(() => {
        window.location.reload(false);
        alert("Record Deleted Successfully");
      });
  }

  const [transportCancel, setTransportCancel] = useState({});

  //To cancel an ongoing request
  function CancelRequest(id) {
    <GetOneTransportRequest id={id} />;
    setTransportCancel(GetOneTransportRequest);

    transportCancel.status = "Cancelled";

    axios
      .post(
        "http://localhost:8070/customerService/transportRequest/update/" + id,
        transportCancel
      )
      .then((info) => {
        console.log(info);
        alert("Booking Cancelled");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function changeColor(data) {
    if (data === "Cancelled") color = "red";
    else if (data === "Ongoing") color = "#0d6efd";
  }
  return (
    <div
      className="container"
      style={{
        width: "40%",
        float: "right",
        marginTop: "-422px",
        marginRight: "20px",
        position: "sticky",
      }}
    >
      <div
        className="container"
        style={{ marginBottom: "12px", float: "left" }}
      >
        <form
          class="form-inline my-2 my-lg-0"
          onSubmit={(e) => {
            setSearch(e.target.search.value);
            e.preventDefault();
            // window.location.reload(false);
          }}
        >
          <input
            class="form-control mr-sm-2"
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            id="search"
            placeholder="Search on Booking Date"
            aria-label="Search"
          />

          <button class="btn btn-primary my-2 my-sm-0" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>

      <table className="table" style={{ width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
            <th scope="col">ReqID</th>
            <th scope="col">Route</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">No Of Seats</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {transportList
            ? transportList
                .filter((val) => {
                  if (search === "") return val;
                  else if (
                    val.requestForDate
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => (
                  <tr key={val._id} onChange={changeColor(val.status)}>
                    <td scope="row">{val.reqId}</td>
                    <td>{val.route}</td>
                    <td>{val.requestForDate}</td>
                    <td>{val.departureTime}</td>
                    <td>{val.noOfSeats}</td>
                    <td style={{ color: color }}>{val.status}</td>

                    <td>
                      <div
                        className="container"
                        style={{
                          width: "100px",
                        }}
                      >
                        {/* To show the edit button only if val.status==="Ongoing" */}
                        {val.status === "Ongoing" && (
                          <Container
                            onSubmit={(e) => {
                              OnSubmit(e, val._id);
                            }}
                          />
                        )}
                        <button
                          type="button"
                          style={{
                            border: "none",
                            backgroundColor: "white",
                          }}
                          onClick={() => {
                            DeleteItem(val._id);
                          }}
                        >
                          <i className="bi bi-trash-fill"></i>
                        </button>

                        {/* To show modify button only when status is ongoing */}
                        {(val.status === "Ongoing" ||
                          val.status === "Completed") && (
                          <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            onClick={(e) => {
                              CancelRequest(val._id);
                              window.location.reload(false);
                            }}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
            : transportList}
        </tbody>
      </table>
    </div>
  );
}
