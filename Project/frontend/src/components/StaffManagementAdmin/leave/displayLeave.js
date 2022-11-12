import React, { useState } from "react";
import GetLeaveDetails from "../../StaffManagement/Leave/Content/GetAllLeaves";
import GetEmployeeDetails from "../../StaffManagement/Employee/Content/GetAllEmployees";
import { jsPDF } from "jspdf";

export default function DisplayLeave() {
  const createPDF = async () => {
    const date = new Date().toISOString().split("T")[0];
    const pdf = new jsPDF("landscape", "px", "a1", false);
    const data = await document.querySelector("#leave");
    pdf.html(data).then(() => {
      pdf.save("Leave Report " + date + ".pdf");
    });
  };

  //For the status field in the table
  var color = "black";

  var leaveDetails = GetLeaveDetails();
  var employeeDetails = GetEmployeeDetails();
  var x = 0;
  var y = 0;
  var details = [];

  //For the search button
  const [search, setSearch] = useState("");

  for (x = 0; x < leaveDetails.length; x++) {
    for (y = 0; y < employeeDetails.length; y++) {
      if (employeeDetails[y].empID == leaveDetails[x].empID) {
        details.push(leaveDetails[x]);
        details.push(employeeDetails[y].name);
      }
    }
  }

  //To not display the cancelled leaves on the admins's interface
  var final = [];
  var j = 0;
  for (j = 0; j < details.length; j++) {
    if (
      details[j].status === "Pending" ||
      details[j].status === "Approved" ||
      details[j].status === "Rejected"
    ) {
      final.push(details[j]);
    }
  }

  function changeColor(data) {
    if (data === "Cancelled") color = "red";
    else if (data === "Rejected") color = "red";
    else if (data === "Approved") color = "green";
    else if (data === "Pending") color = "#0d6efd";
  }

  return (
    <>
      <div id="leave">
        <div
          className="container"
          style={{ float: "right", marginRight: "-1000px" }}
        >
          <form className="form-inline my-2 my-lg-0">
            <select
              className="form-select"
              style={{
                marginBottom: "30px",
                width: "150px",
              }}
              id="search"
              name="search"
              onChange={(e) => {
                setSearch(e.target.value);
                e.preventDefault();
              }}
            >
              <option value="">Show All</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </form>
        </div>

        <div
          className="container"
          style={{
            width: "70%",
            float: "center",
            marginTop: "100px",
            marginLeft: "250px",
            position: "sticky",
          }}
        >
          <h1 className="display-6" style={{ marginBottom: "80px" }}>
            Manage Leave Requests
          </h1>

          <table className="table">
            <thead>
              <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
                <th scope="col">LeaveID</th>
                <th scope="col">EmployeeID</th>
                {/* <th scope="col">Name</th> */}
                <th scope="col">Absence From</th>
                <th scope="col">Absence To </th>
                <th scope="col">No Of Days</th>
                <th scope="col">Type</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {final
                ? final
                    .filter((val) => {
                      if (search === "") return val;
                      else if (
                        val.status.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((val) => (
                      <tr key={val._id} onChange={changeColor(val.status)}>
                        <td>{val.leaveID}</td>
                        <td>{val.empID}</td>
                        {/* <td>{val.name}</td> */}
                        <td>{val.startDate}</td>
                        <td>{val.endDate}</td>
                        <td>{val.noOfDays}</td>
                        <td>{val.type}</td>
                        <td>{val.description}</td>
                        <td style={{ color: color }}>{val.status}</td>
                      </tr>
                    ))
                : final}
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
      </div>
    </>
  );
}
