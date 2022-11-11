import React, { useState } from "react";
import axios from "axios";
import { renderMatches } from "react-router-dom";
import GetAttendanceDetails from "../../Attendance/Content/GetAllAttendance";

export default function GetAttendanceOfEmployees() {
  var attendanceList = GetAttendanceDetails();

  var currDate = new Date().toISOString().slice(0, 10);

  //For the search button
  const [search, setSearch] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ float: "right", marginRight: "-1100px" }}
      >
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
              e.window.location.reload(false);
            }}
          />
        </form>
      </div>
      <div
        className="container"
        style={{
          width: "70%",
          float: "center",
          marginTop: "100px",
          marginLeft: "215px",
          position: "sticky",
        }}
      >
        <h1 className="display-6" style={{ marginBottom: "40px" }}>
          Attendance Of Employees
        </h1>

        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
              <th scope="col">Date</th>
              <th scope="col">EmployeeID</th>
              <th scope="col">Check In Time </th>
              <th scope="col">Check Out Time</th>
              <th scope="col">Worked Hours</th>
              <th scope="col">Total Pay</th>
            </tr>
          </thead>
          <tbody>
            {attendanceList
              ? attendanceList
                  .filter((val) => {
                    if (search === "") return val;
                    else if (
                      val.date.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((val) => (
                    <tr key={val._id}>
                      <td>{val.date}</td>
                      <td>{val.empID}</td>
                      <td>{val.checkIn}</td>
                      <td>{val.checkOut}</td>
                      <td>{val.hours}</td>
                      <td>{val.pay}</td>
                    </tr>
                  ))
              : attendanceList}
          </tbody>
        </table>
      </div>
    </>
  );
}
