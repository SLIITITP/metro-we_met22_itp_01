import React, { useEffect, useState } from "react";
import axios from "axios";
import getAllAmenityRequest from "./getAmenity";
import { Container } from "../js/Container";
import "../../../../index.css";
import PopOver from "../Component/popOver";
import GetOneAmenity from "./getOneAmenity";
import getAllRequest from "./getRequest";

export default function ShowAmenityRequest() {
  var color = "#0d6efd"; //for the status field in the table
  const amenityList = getAllAmenityRequest();
  const reqList = getAllRequest();

  //For the search button
  const [search, setSearch] = useState("");

  //To store all details in AmenityRequest and update and display data
  const [AmenityRequest, setAmenityRequest] = useState({});
  const [Request, setRequest] = useState({});

  let i = 0;
  let j = 0;
  var reqID;

  const OnSubmit = (event, id) => {
    for (i = 0; i < amenityList.length; i++) {
      if (amenityList[i]._id == id) {
        break;
      }
    }

    reqID = amenityList[i].reqId;

    for (j = 0; j < reqList.length; j++) {
      if (reqList[j].reqId == reqID) {
        break;
      }
    }

    //Setting up AmenityRequest so that we can update it using the update Route
    setAmenityRequest(amenityList[i]);
    setRequest(reqList[j]);

    AmenityRequest.note = event.target.note.value;
    AmenityRequest.requestedItems = event.target.requestedItem1.value;

    Request.notes = event.target.note.value;

    axios
      .post(
        "http://localhost:8070/customerService/roomNecessityRequest/update/" +
          id,
        AmenityRequest
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

  //To delete a Amenity request created
  function DeleteItem(id) {
    window.location.reload(false);

    axios
      .delete(
        "http://localhost:8070/customerService/roomNecessityRequest/" + id
      )
      .then(() => {
        alert("Record Deleted Successfully");
      });
  }

  const [AmenityCancel, setAmenityCancel] = useState({});

  //To cancel an ongoing request
  function CancelRequest(id) {
    for (i = 0; i < amenityList.length; i++) {
      if (amenityList[i]._id == id) {
        break;
      }
    }

    reqID = amenityList[i].reqId;

    for (j = 0; j < reqList.length; j++) {
      if (reqList[j].reqId == reqID) {
        break;
      }
    }

    <GetOneAmenity id={id} />;
    setAmenityCancel(GetOneAmenity);

    AmenityCancel.status = "Cancelled";
    Request.status = "Cancelled";

    axios
      .post(
        "http://localhost:8070/customerService/roomNecessityRequest/update/" +
          id,
        AmenityCancel
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
            // window.location.reload(false);
          }}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            id="search"
            placeholder="Search Items"
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
            <th scope="col">Requested List</th>
            <th scope="col">Notes</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {amenityList
            ? amenityList
                .filter((val) => {
                  if (search === "") return val;
                  else if (
                    val.requestedItems
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => (
                  <tr key={val._id} onChange={changeColor(val.status)}>
                    <td scope="row">{val.reqId}</td>
                    <td>
                      <PopOver
                        msg={val.requestedItems}
                        viewName="List"
                        btnName={"View List"}
                      />
                    </td>
                    <td>
                      <PopOver
                        msg={val.note}
                        viewName="Notes"
                        btnName={"Read Notes"}
                      />
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
            : amenityList}
        </tbody>
      </table>
    </div>
  );
}
