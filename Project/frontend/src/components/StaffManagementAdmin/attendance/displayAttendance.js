import React, { useState } from "react";
import GetAttendanceDetails from "../../StaffManagement/Attendance/Content/GetAllAttendance";
import { jsPDF } from "jspdf";

export default function DisplayAttendance() {
  const createPDF = async () => {
    const date = new Date().toISOString().split("T")[0];
    const pdf = new jsPDF("landscape", "px", "a1", false);
    const data = await document.querySelector("#attendance");
    pdf.html(data).then(() => {
      pdf.save("Attendance Report " + date + ".pdf");
    });
  };

  //For the search button
  const [search, setSearch] = useState("");

  var currDate = new Date().toISOString().slice(0, 10);

  var attendanceList = GetAttendanceDetails();

  return (
    <>
      <div id="attendance">
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
      </div>
      <div
        className="container"
        style={{
          width: "50%",
          float: "center",
          marginTop: "25px",
          marginLeft: "350px",
          position: "sticky",
        }}
      >
        <button className="btn btn-primary" onClick={createPDF}>
          Export
        </button>
        <br></br>
      </div>
    </>
  );
}
