import React, { useEffect, useState } from "react";
import axios from "axios";
import getTransportRequest from "./getTransportRequest";
import { Container } from "../js/Container";
import "../../../../index.css";
import Trigger from "../Component/popOver";

export default function ShowTransportRequest() {
  const transportList = getTransportRequest();
  const [search, setSearch] = useState("");
  const [TransportRequest, setTransportRequest] = useState({
    reqId: "1",
    route: "",
    seatNo: [],
    noOfSeats: 0,
    requestForDate: "",
    requestForTime: "",
  });

  let i = 0;
  const OnSubmit = (event, id) => {
    for (i; i < transportList.length; i++) {
      if (transportList[i]._id == id) {
        break;
      }
    }

    TransportRequest.route = event.target.notes.value;
    TransportRequest.requestForDate = event.target.date.value;
    TransportRequest.requestForTime = event.target.time.value;

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

  function DeleteItem(id) {
    axios
      .delete("http://localhost:8070/customerService/transportRequest/" + id)
      .then(() => {
        window.location.reload(false);
        alert("Record Deleted Successfully");
      });
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
            e.window.location.reload(false);
          }}
        >
          <input
            class="form-control mr-sm-2"
            type="search"
            id="search"
            placeholder="Search Notes"
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
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {transportList
            ? transportList
                .filter((val) => {
                  if (search === "") return val;
                  else if (
                    val.route.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => (
                  <tr key={val._id}>
                    <td scope="row">{val.reqId}</td>
                    <td>{val.route}</td>
                    <td>{val.requestForDate}</td>
                    <td>{val.requestForTime}</td>
                    {/* <td>
                      <Trigger msg={val.notes} />
                    </td> */}
                    <td>{val.noOfSeats}</td>
                    <td>
                      <div
                        className="container"
                        style={{
                          width: "80px",
                        }}
                      >
                        <Container
                          onSubmit={(e) => {
                            OnSubmit(e, val._id);
                          }}
                        />

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
                      </div>
                    </td>
                  </tr>
                ))
            : null}
        </tbody>
      </table>
    </div>
  );
}
