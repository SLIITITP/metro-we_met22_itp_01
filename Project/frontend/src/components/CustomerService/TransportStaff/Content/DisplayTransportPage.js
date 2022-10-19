import React, { useEffect, useState } from "react";
import axios from "axios";
import getAllInfo from "./getAllRequest";
import { Container } from "../js/Container";
import "../../../../index.css";
import Trigger from "../Component/popOver";
import GetAllTransports from "./getAllTransport";
import GetAllAttendInfo from "./getAllAttendRequest";
import GetAllDrivers from "./getDriver";
// Have to complete display dirver id in table
// Have to show Booked seat count and available count

export default function DisplayTransportPage() {
  var color = "black"; //for the status field in the table
  const allReqList = getAllInfo(); //To get All the request from the request Table
  const allDrivers = GetAllDrivers(); //To display driver information
  const allTransList = GetAllTransports(); // to get all the transports from the customer transport table

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

  var currDate = new Date().toISOString().slice(0, 10);

  //To update AttendRequest Table
  var AttendRequest = {
    empId: "1",
    reqId: "1",
    status: "",
    action: "Null",
    cancellationReason: "",
    updatedDate: "",
    updatedTime: "",
  };

  AttendRequest.updatedDate = fecha;
  AttendRequest.updatedTime = time;

  //For the search button
  const [search, setSearch] = useState("");

  var selectedRequestList = []; //To select only the request with servicetype = transport

  var i1 = 0;
  var top = -1;

  function display() {
    //taking servicetype=transport records from the request table
    i1 = 0;
    top = -1;

    for (i1 = 0; i1 < allReqList.length; i1++) {
      var selectedDate = document.getElementById("search").value;
      //To display only current date's transport booking for a route
      if (
        allReqList[i1].serviceType === "TransportRequest" &&
        allReqList[i1].bookingDate === selectedDate
      ) {
        if (selectedRequestList.length === 0) {
          top++;
          selectedRequestList.push(allReqList[i1]);
          selectedRequestList[top].bookedSeats = allTransList[top].noOfSeats;
          selectedRequestList[top].availableSeats =
            72 - selectedRequestList[top].bookedSeats;
        } else if (selectedRequestList.length > 0) {
          var available = 0;
          var t = 0;
          var v = 0;

          //This loop is just to check if the record for similar route already exists
          //Or A for loop to check if the record already exists in seletedRequestList
          for (t = 0; t < selectedRequestList.length; t++) {
            if (allReqList[i1].route === selectedRequestList[t].route) {
              available = 1;
              break;
            }
          }

          //To get the correct transport record
          for (v = 0; v < allTransList.length; v++) {
            if (
              allReqList[i1].reqId === allTransList[v].reqId &&
              allReqList[i1].bookingDate === selectedDate
            )
              break;
          }

          //To get the correct RequestList record
          for (top = 0; top < selectedRequestList.length; top++) {
            if (allReqList[i1].route === selectedRequestList[top].route) break;
          }

          if (available === 1)
            selectedRequestList[top].bookedSeats += allTransList[v].noOfSeats;
          else if (available === 0) {
            selectedRequestList.push(allReqList[i1]);
            selectedRequestList[top].bookedSeats = allTransList[v].noOfSeats;
          }
          selectedRequestList[top].availableSeats =
            72 - selectedRequestList[top].bookedSeats;
        }
      }
    }
  }
  display();
  var allAttendReq = GetAllAttendInfo(); //to get all attended request information from AttendRequest Table

  function displayList() {
    //To update the seletedRequestList with cancellationReason

    var z = 0;
    for (z = 0; z < selectedRequestList.length; z++) {
      var reqId1 = selectedRequestList[z].reqId;

      for (var y = 0; y < allAttendReq.length; y++) {
        if (reqId1 === allAttendReq[y].reqId) {
          selectedRequestList[z].cancellationReason =
            allAttendReq[y].cancellationReason; //To add an cancellationReason field for selectedRequestList
          break;
        }
      }
      //Below forLoop is to get the correct driver ID from the dirver table to loop through
      for (var f = 0; f < allDrivers.length; f++) {
        if (selectedRequestList[z].route === allDrivers[f].route) {
          selectedRequestList[z].driverID = allDrivers[f].driverID;
          selectedRequestList[z].busNo = allDrivers[f].busNo;
          selectedRequestList[z].cancellationReason = allTransList[f].message;
          break;
        }
      }
    }
  }

  displayList();

  let i = 0;
  let j = 0;
  var k = 0;

  const OnSubmit = async (event, busNo, bookingDate) => {
    window.location.reload(false);

    var cancellationReqList = [];
    var cancellationTransList = [];

    for (i = 0; i < allReqList.length; i++) {
      if (
        allReqList[i].busNo === busNo &&
        allReqList[i].bookingDate === bookingDate
      ) {
        allReqList[i].status = "Cancelled";
        cancellationReqList.push(allReqList[i]);
      }
    }

    var desc = event.target.cancellationReason.value;

    for (j = 0; j < allTransList.length; j++) {
      if (
        allTransList[j].busNo === busNo &&
        allTransList[j].requestForDate === bookingDate
      ) {
        allTransList[j].status = "Cancelled";
        allTransList[j].message = desc;
        cancellationTransList.push(allTransList[j]);
      }
    }

    for (k = 0; k < cancellationTransList.length; k++) {
      axios
        .post(
          "http://localhost:8070/customerService/transportRequest/update/" +
            cancellationTransList[k]._id,
          cancellationTransList[k]
        )
        .then(() => {
          console.log("Cancelled Bookings");
        })
        .catch((err) => {
          console.log(err.message);
        });

      axios
        .post(
          "http://localhost:8070/customerService/update/" +
            cancellationReqList[k]._id,
          cancellationReqList[k]
        )
        .then(() => {
          console.log("Request Cancelled");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    for (k = 0; k < cancellationReqList.length; k++) {
      AttendRequest.reqId = cancellationReqList[k].reqId;
      // AttendRequest.empId = cancellationTransList[k].driverID;
      AttendRequest.cancellationReason = desc;
      AttendRequest.status = "Cancelled";

      if (cancellationReqList[k].route === "Kandy")
        AttendRequest.empId = "D001";
      else if (cancellationReqList[k].route === "Dambulla")
        AttendRequest.empId = "D002";
      else if (cancellationReqList[k].route === "Wilpattu")
        AttendRequest.empId = "D003";

      axios
        .post(
          "http://localhost:8070/customerService/attendRequest/",
          AttendRequest
        )
        .then(() => {
          console.log("Update Successful");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  function changeColor(data) {
    if (data === "Cancelled") color = "red";
    else if (data === "Booked") color = "#0d6efd";
  }
  return (
    <div
      className="container"
      style={{
        marginTop: "150px",
        position: "sticky",
      }}
    >
      <div className="container">
        <form className="form-inline my-2 my-lg-0">
          <input
            type="date"
            id="search"
            name="search"
            className="form-control"
            defaultValue={currDate}
            onChange={(e) => {
              setSearch(e.target.value);
              e.preventDefault();
            }}
          />
        </form>
      </div>

      <table className="table" style={{ width: "100%" }}>
        <thead>
          <tr
            style={{
              backgroundColor: "#0d6efd",
              color: "white",
            }}
          >
            <th scope="col">BusNo</th>
            <th scope="col">Route</th>
            <th scope="col">DriverID</th>
            <th scope="col">Route</th>
            <th scope="col">Date</th>
            <th scope="col">Booked</th>
            <th scope="col">Available</th>
            <th scope="col">Status</th>
            <th scope="col">Reason</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedRequestList
            ? selectedRequestList
                .filter((val) => {
                  if (search === "") return val;
                  else if (
                    val.bookingDate.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => (
                  <tr key={val._id} onChange={changeColor(val.status)}>
                    <td scope="row">{val.busNo}</td>
                    <td>{val.route}</td>
                    <td>{val.driverID}</td>
                    <td>{val.route}</td>
                    <td>{val.bookingDate}</td>
                    <td>{val.bookedSeats}</td>
                    <td>{val.availableSeats}</td>

                    <td style={{ color: color }}>{val.status}</td>
                    <td>
                      {val.status === "Cancelled" && (
                        <Trigger msg={val.cancellationReason} />
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
                              OnSubmit(e, val.busNo, val.bookingDate);
                              e.preventDefault();
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
