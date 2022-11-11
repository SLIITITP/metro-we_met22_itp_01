import React, { useEffect, useState } from "react";
import axios from "axios";
import getAllInfo from "../../ComplaintStaff/Content/getAllRequest";
import { Container } from "../../TransportStaff/js/Container";
import "../../../../index.css";
import Trigger from "../../TransportStaff/Component/popOver";

import GetAllTransports from "./getTransportRequest";
import GetAllDrivers from "../../TransportStaff/Content/getDriver";
import GetAllAttendInfo from "../../ComplaintStaff/Content/getAllAttendRequest";

// Have to complete display dirver id in table
// Have to show Booked seat count and available count

export default function DisplayAllTransportForRep() {
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
  var currMonth = currDate.substring(5, 7);

  //For the search button
  const [search, setSearch] = useState(currMonth.toString());

  var i1 = 0;
  var top = -1;
  var s = 0;
  var selectedRequestList = [
    //To select only the request with servicetype = transport
    {
      BusNo: "NC-5770",
      Route: "Kandy",
      DriverID: "D002",
      Month: currMonth,
      Bookings: 0,
      UnBooked: 2160,
      message: "None",
    },
    {
      BusNo: "NC-5969",
      Route: "Dambulla",
      DriverID: "D003",
      Month: currMonth,
      Bookings: 0,
      UnBooked: 2160,
      message: "None",
    },
    {
      BusNo: "NF-6198",
      Route: "Wilpattu",
      DriverID: "D001",
      Month: currMonth,
      Bookings: 0,
      UnBooked: 2160,
      message: "None",
    },
  ];

  function display() {
    i1 = 0;

    for (i1 = 0; i1 < allTransList.length; i1++) {
      var allTransListMonth = allTransList[i1].requestForDate.substring(5, 7);

      if (allTransListMonth === search) {
        if (allTransList[i1].route === "Kandy") {
          selectedRequestList[0].Bookings += 1;
          selectedRequestList[0].UnBooked -= 1;
          selectedRequestList[0].Month = allTransListMonth;
        } else if (allTransList[i1].route === "Dambulla") {
          selectedRequestList[1].Bookings += 1;
          selectedRequestList[1].UnBooked -= 1;
          selectedRequestList[1].Month = allTransListMonth;
        } else if (allTransList[i1].route === "Wilpattu") {
          selectedRequestList[2].Bookings += 1;
          selectedRequestList[2].UnBooked -= 1;
          selectedRequestList[2].Month = allTransListMonth;
        }
      }
    }
  }
  display();

  var allAttendReq = GetAllAttendInfo(); //to get all attended request information from AttendRequest Table

  let i = 0;
  let j = 0;
  var k = 0;

  function changeColor(data) {
    if (data === "Cancelled") color = "red";
    else if (data === "Booked") color = "#0d6efd";
  }
  return (
    <div
      className="container"
      style={{
        marginTop: "10px",
        position: "sticky",
        width: "70%",
      }}
    >
      <div className="container">
        <form className="form-inline my-2 my-lg-0">
          <select
            className="form-select"
            id="search"
            defaultValue={currMonth}
            style={{
              marginBottom: "30px",
              width: "150px",
            }}
            onChange={(e) => {
              setSearch(e.target.value);
              e.preventDefault();
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11" selected>
              11
            </option>
            <option value="12">12</option>
          </select>
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
            <th scope="col">Month</th>
            <th scope="col">Total Bookings</th>
            <th scope="col">UnBooked</th>
            {/* <th scope="col">Status</th>
            <th scope="col">Reason</th> */}
          </tr>
        </thead>
        <tbody>
          {selectedRequestList
            ? selectedRequestList
                .filter((val) => {
                  if (search === "") return val;
                  else if (
                    val.Month.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => (
                  <tr key={val.BusNo} onChange={changeColor(val.status)}>
                    <td scope="row">{val.BusNo}</td>
                    <td>{val.Route}</td>
                    <td>{val.DriverID}</td>
                    <td>{val.Month}</td>
                    <td>{val.Bookings}</td>
                    <td>{val.UnBooked}</td>
                    {/* <td>{val.availableSeats}</td> */}

                    {/* <td style={{ color: color }}>{val.status}</td>
                    <td>
                      {val.status === "Cancelled" && (
                        <Trigger msg={val.cancellationReason} />
                      )}
                    </td> */}
                  </tr>
                ))
            : allReqList}
        </tbody>
      </table>
    </div>
  );
}
