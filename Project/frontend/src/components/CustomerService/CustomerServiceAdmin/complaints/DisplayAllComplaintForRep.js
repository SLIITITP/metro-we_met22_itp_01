import React, { useEffect, useState } from "react";
import axios from "axios";
import getAllInfo from "../../ComplaintStaff/Content/getAllRequest";
import { Container } from "../../ComplaintStaff/js/Container";
import "../../../../index.css";
import Trigger from "../../ComplaintStaff/Component/popOver";
import GetAllAttendInfo from "../../ComplaintStaff/Content/getAllAttendRequest";

export default function DisplayComplaintRequestForRep(props) {
  var color = "black"; //for the status field in the table
  const allReqList = getAllInfo();

  //For the search button
  let search = props.search.trim();
  console.log(search);

  var selectedRequestList = []; //To select only the request with servicetype = complaint

  //To store all details in ReqForAgent and update and display data
  const [ReqForAgent, setReqForAgent] = useState({}); //To update Request Table with popup form

  //To update customer Complaint table with action taken after the agent enters the action taken
  const [ComplaintReqForCust, setComplaintReqForCust] = useState({});

  let i = 0;
  let j = 0;

  //taking servicetype=complaint records from the request table
  for (i = 0; i < allReqList.length; i++) {
    if (allReqList[i].serviceType === "CustomerComplaint") {
      selectedRequestList.push(allReqList[i]);
    }
  }

  var allAttendReq = GetAllAttendInfo(); //to get all attended request information from AttendRequest Table

  function displayList() {
    for (var z = 0; z < selectedRequestList.length; z++) {
      var reqId1 = selectedRequestList[z].reqId;
      var stats = 0; //To check if the complaint has been attended

      for (var y = 0; y < allAttendReq.length; y++) {
        if (reqId1 === allAttendReq[y].reqId) {
          stats = 1;
          selectedRequestList[z].action = allAttendReq[y].action; //To add an action field for selectedRequestList
          break;
        }
      }
      if (stats === 0)
        selectedRequestList[z].action = "Request Not Attended Yet"; //To add an action field for selectedRequestList
    }
  }

  displayList();

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
        position: "sticky",
        width: "80%",
        marginRight: "70px",
        marginTop: "10px",
      }}
    >
      <table className="table">
        <thead>
          <tr
            style={{
              backgroundColor: "#0d6efd",
              color: "white",
              width: "100%",
            }}
          >
            <th scope="col">ComplaintID</th>
            <th scope="col">Email</th>
            <th scope="col">RoomID</th>
            <th scope="col">RequestedOn</th>
            <th scope="col">RequestedFor</th>
            <th scope="col">Note</th>
            <th scope="col">Status</th>
            <th scope="col">Action Taken</th>
          </tr>
        </thead>
        <tbody>
          {selectedRequestList
            ? selectedRequestList
                .filter((val) => {
                  if (search === "") return val;
                  else if (
                    val.requestedOn.toLowerCase().includes(search.toLowerCase())
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
                    <td>{val.notes}</td>
                    <td style={{ color: color }}>{val.status}</td>
                    <td>{val.action}</td>
                  </tr>
                ))
            : allReqList}
        </tbody>
      </table>
    </div>
  );
}
