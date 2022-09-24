import React, { useEffect, useState } from "react";
import axios from "axios";
import getAllInfo from "./getAllRequest";
import { Container } from "../js/Container";
import "../../../../index.css";
import Trigger from "../Component/popOver";
import GetAllComplaint from "./getAllComplaint";
import GetAllAttendInfo from "./getAllAttendRequest";

export default function DisplayComplaintRequest() {
  var color = "black"; //for the status field in the table
  const allReqList = getAllInfo();

  //Taking only the date from Date()
  var today = new Date();
  var year = today.getFullYear();
  var mes = today.getMonth() + 1;
  var dia = today.getDate();

  //Taking time without seconds
  var time = today
    .toLocaleTimeString("en-US", {
      hour12: false,
    })
    .replace(/(.*)\D\d+/, "$1");

  const fecha = year + "-" + mes + "-" + dia;

  const [AttendRequest, setAttendRequest] = useState({
    empId: "1",
    reqId: "1",
    status: "",
    action: "",
    updatedDate: "",
    updatedTime: "",
  });

  AttendRequest.updatedDate = fecha;
  AttendRequest.updatedTime = time;

  //For the search button
  const [search, setSearch] = useState("");

  var selectedRequestList = []; //I'm taking it as an array

  //To store all details in ReqForAgent and update and display data
  const [ReqForAgent, setReqForAgent] = useState({});
  const [ComplaintReqForCust, setComplaintReqForCust] = useState({});

  let i = 0;
  let j = 0;

  for (i = 0; i < allReqList.length; i++) {
    if (allReqList[i].serviceType === "CustomerComplaint") {
      selectedRequestList.push(allReqList[i]);
    }
  }

  const allCompList = GetAllComplaint();
  var allAttendReq = GetAllAttendInfo();

  function displayList() {
    for (var z = 0; z < selectedRequestList.length; z++) {
      var reqId1 = selectedRequestList[z].reqId;
      var stats = 0;

      for (var y = 0; y < allAttendReq.length; y++) {
        if (reqId1 === allAttendReq[y].reqId) {
          stats = 1;
          selectedRequestList[z].action = allAttendReq[y].action;
          break;
        }
      }
      if (stats === 0) selectedRequestList[z].action = "Request Not Attended";
    }
  }

  displayList();

  const OnSubmit = (event, id) => {
    //
    window.location.reload(false);

    for (i = 0; i < selectedRequestList.length; i++) {
      if (selectedRequestList[i]._id == id) break;
    }

    for (j = 0; j < allCompList.length; j++) {
      if (allCompList[j].complaintId == selectedRequestList[i].reqId) break;
    }

    //Setting up ReqForAgent so that we can update it using the update Route
    setReqForAgent(selectedRequestList[i]);
    setComplaintReqForCust(allCompList[j]);

    //To set the updated Action in Request Table
    var desc = event.target.UpdatedNotes.value;
    var status = event.target.status.value;

    ReqForAgent.status = status;
    ComplaintReqForCust.status = status;

    AttendRequest.reqId = selectedRequestList[i].reqId;
    AttendRequest.status = status;
    AttendRequest.action = desc;

    axios
      .post(
        "http://localhost:8070/customerService/complaint/update/" +
          allCompList[j]._id,
        ComplaintReqForCust
      )
      .then(() => {
        alert("Update Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });

    axios
      .post("http://localhost:8070/customerService/update/" + id, ReqForAgent)
      .then(() => {
        console.log("Update Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });

    var available = 0; //To check if the request has been previously attended

    for (j = 0; j < allAttendReq.length; j++) {
      if (allAttendReq[j].reqId == selectedRequestList[i].reqId) {
        available = 1;
        break;
      } else available = 0;
    }

    if (available === 0) {
      axios
        .post(
          "http://localhost:8070/customerService/attendRequest/",
          AttendRequest
        )
        .then(() => {
          console.log("Update Successful");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else if (available === 1) {
      axios
        .post(
          "http://localhost:8070/customerService/attendRequest/update/" +
            allAttendReq[j]._id,
          AttendRequest
        )
        .then(() => {
          console.log("Update Successful");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  function changeColor(data) {
    if (data === "Cancelled") color = "red";
    else if (data === "Ongoing") color = "#0d6efd";
    else if (data === "Solved") color = "green";
    else if (data === "Pending") color = "#E8A317";
  }
  return (
    <div
      className="container"
      style={{
        width: "40%",
        marginTop: "150px",
        position: "sticky",
        marginLeft: "270px",
      }}
    >
      <div
        className="container"
        style={{ marginBottom: "12px", marginLeft: "270px", float: "right" }}
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
            <th scope="col">ComplaintID</th>
            <th scope="col">CustID</th>
            <th scope="col">RoomID</th>
            <th scope="col">RequestedOn</th>
            <th scope="col">RequestedFor</th>
            <th scope="col">Note</th>
            <th scope="col">Status</th>
            <th scope="col">Action Taken</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedRequestList
            ? selectedRequestList
                .filter((val) => {
                  if (search === "") return val;
                  else if (
                    val.notes.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => (
                  <tr key={val._id} onChange={changeColor(val.status)}>
                    <td scope="row">{val.reqId}</td>
                    <td>{val.custId}</td>
                    <td>{val.roomId}</td>
                    <td>{val.requestedOn}</td>
                    <td>{val.requestedtime}</td>
                    <td>
                      <Trigger msg={val.notes} />
                    </td>
                    <td style={{ color: color }}>{val.status}</td>
                    <td>
                      {val.status !== "Cancelled" && (
                        <Trigger msg={val.action} />
                      )}
                    </td>
                    <td>
                      <div
                        className="container"
                        style={{
                          width: "100px",
                        }}
                      >
                        {/* To show the edit button only if val.status==="Ongoing" */}
                        {val.status !== "Cancelled" && (
                          <Container
                            onSubmit={(e) => {
                              OnSubmit(e, val._id);
                            }}
                          />
                        )}
                      </div>
                    </td>
                  </tr>
                ))
            : allReqList}
        </tbody>
      </table>
    </div>
  );
}
