import React, { useEffect, useState } from "react";
import axios from "axios";
import getComplaintRequest from "./getComplaint";
import { Container } from "../js/Container";
import "../../../../index.css";
import Trigger from "../Component/popOver";
import GetOneComplaint from "./getOneComplaint";
import getAllRequest from "./getRequest";

export default function ShowComplaintRequest() {
  var color = "black"; //for the status field in the table
  const complaintList = getComplaintRequest();
  const reqList = getAllRequest();

  //For the search button
  const [search, setSearch] = useState("");

  //To store all details in ComplaintRequest and update and display data
  const [ComplaintRequest, setComplaintRequest] = useState({});
  const [Request, setRequest] = useState({});

  let i = 0;
  let j = 0;
  var reqID;

  const OnSubmit = (event, id) => {
    window.location.reload(false);

    for (i = 0; i < complaintList.length; i++) {
      if (complaintList[i]._id == id) {
        break;
      }
    }

    reqID = complaintList[i].complaintId;

    for (j = 0; j < reqList.length; j++) {
      if (reqList[j].reqId == reqID) {
        break;
      }
    }

    //Setting up ComplaintRequest so that we can update it using the update Route
    setComplaintRequest(complaintList[i]);
    ComplaintRequest.description = event.target.description.value;
    ComplaintRequest.type = event.target.type.value;
    ComplaintRequest.for = event.target.for.value;

    Request.notes = event.target.description.value;

    axios
      .post(
        "http://localhost:8070/customerService/complaint/update/" + id,
        ComplaintRequest
      )
      .then(() => {
        alert("Update Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });

    axios
      .post(
        "http://localhost:8070/customerService/update/" + reqList[j]._id,
        Request
      )
      .then(() => {
        console.log("Update Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //To delete a Complaint request created
  function DeleteItem(id) {
    window.location.reload(false);

    axios
      .delete("http://localhost:8070/customerService/complaint/" + id)
      .then(() => {
        alert("Record Deleted Successfully");
      });
  }

  const [ComplaintCancel, setComplaintCancel] = useState({});

  //To cancel an ongoing request
  function CancelRequest(id) {
    window.location.reload(false);

    for (i = 0; i < complaintList.length; i++) {
      if (complaintList[i]._id == id) {
        break;
      }
    }

    reqID = complaintList[i].complaintId;

    for (j = 0; j < reqList.length; j++) {
      if (reqList[j].reqId == reqID) {
        break;
      }
    }

    <GetOneComplaint id={id} />;
    setComplaintCancel(GetOneComplaint);

    ComplaintCancel.status = "Cancelled";
    Request.status = "Cancelled";

    axios
      .post(
        "http://localhost:8070/customerService/complaint/update/" + id,
        ComplaintCancel
      )
      .then((info) => {
        console.log(info);
        alert("Booking Cancelled");
      })
      .catch((err) => {
        console.log(err.message);
      });

    axios
      .post(
        "http://localhost:8070/customerService/update/" + reqList[j]._id,
        Request
      )
      .then((info) => {
        console.log(info);
        console.log("Booking Cancelled");
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
          className="form-inline my-2 my-lg-0"
          onSubmit={(e) => {
            setSearch(e.target.search.value);
            e.preventDefault();
          }}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            id="search"
            placeholder="Search Description"
            aria-label="Search"
          />

          <button className="btn btn-primary my-2 my-sm-0" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>

      <table className="table" style={{ width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
            <th scope="col">ID</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Complaint</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {complaintList
            ? complaintList
                .filter((val) => {
                  if (search === "") return val;
                  else if (
                    val.description.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => (
                  <tr key={val._id} onChange={changeColor(val.status)}>
                    <td scope="row">{val.complaintId}</td>
                    <td>{val.date}</td>
                    <td>{val.time}</td>
                    <td>{val.for}</td>
                    <td>
                      <Trigger msg={val.description} />
                    </td>
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

                        {/* To show cancel button only when status is ongoing */}
                        {(val.status === "Ongoing" ||
                          val.status === "Completed") && (
                          <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            onClick={(e) => {
                              CancelRequest(val._id);
                            }}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
            : complaintList}
        </tbody>
      </table>
    </div>
  );
}
