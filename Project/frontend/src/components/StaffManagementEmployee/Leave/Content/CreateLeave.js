import React, { useState } from "react";
import axios from "axios";
import GetLeaveDetails from "./GetAllLeaves";

export default function CreateLeave() {
  let leaveIdString = "1";
  const leaveList = GetLeaveDetails();

  const [leaveID, setLeaveID] = useState("");
  const [empID, setEmpID] = useState("");
  //const [empName, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [noOfDays, setNoOfDays] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newLeave = {
      leaveID,
      empID,
      //empName,
      startDate,
      endDate,
      noOfDays,
      type,
      description,
    };

    //To find the last id
    let j = leaveList.length;
    j--;
    if (j >= 0) {
      let leaveId = parseInt(leaveList[j].leaveID);
      leaveId++;
      leaveIdString = leaveId.toString();
      setLeaveID(leaveIdString);
      console.log(leaveID);
    } else {
      setLeaveID(leaveIdString);
      console.log(leaveID);
    }

    console.log(newLeave);

    axios
      .post("http://localhost:8070/leave/create", newLeave)
      .then(() => {
        alert("Leave requested. Wait for approval by the manager...");
        window.location.replace(
          "http://localhost:3000/Staff/staffManagementEmployee/leave"
        );
        // window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });

    // To clear out the form fields
    document.getElementById("leaveID").value = "";
    document.getElementById("empID").value = "";
    //document.getElementById("empName").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    document.getElementById("type").value = "";
    document.getElementById("description").value = "";
  }

  return (
    <div
      className="container"
      style={{
        width: "40%",
        position: "sticky",
      }}
    >
      <form
        onSubmit={sendData}
        style={{ marginTop: "100px", marginLeft: "-125px", width: "100%" }}
      >
        <h1
          className="display-6"
          style={{ marginBottom: "40px", zIndex: "200" }}
        >
          Request For Leave
        </h1>

        {/* <div className="mb-3">
          <label htmlFor="LeaveID" className="form-label">
            Leave ID
          </label>
          <input
            type="text"
            id="leaveID"
            name="leaveID"
            className="form-control"
            required
            placeholder="Enter leave id"
            onChange={(event) => {
              setLeaveID(event.target.value);
            }}
          />
        </div> */}

        <div className="mb-3">
          <label htmlFor="EmpID" className="form-label">
            Employee ID
          </label>
          <input
            type="text"
            id="empID"
            name="empID"
            className="form-control"
            required
            placeholder="Enter employee id"
            onChange={(event) => {
              setEmpID(event.target.value);
            }}
          />
        </div>

        {/* <div className="mb-3">
          <label htmlFor="EmpName" className="form-label">
            Employee Name
          </label>
          <input
            type="text"
            id="empName"
            name="empName"
            className="form-control"
            required
            placeholder="Enter employee name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div> */}

        <div className="mb-3">
          <label htmlFor="StartDate" className="form-label">
            Date of Absence From :
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            className="form-control"
            onChange={(event) => {
              setStartDate(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="EndDate" className="form-label">
            Date of Absence To :
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            className="form-control"
            onChange={(event) => {
              setEndDate(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="NoOfDays" className="form-label">
            Number of Days :
          </label>
          <input
            type="number"
            id="noOfDays"
            name="noOfDays"
            className="form-control"
            onChange={(event) => {
              setNoOfDays(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Type" className="form-label">
            Type :
          </label>
          <select
            className="form-select"
            id="type"
            aria-label="Default select example"
            onChange={(event) => {
              setType(event.target.value);
            }}
          >
            <option value="Select">Select</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Annual Leave">Annual Leave</option>
            <option value="Emergency">Emergency </option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Reason
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            cols="50"
            placeholder="Description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>

        <br></br>
        <div className="container">
          <button type="submit" className="btn btn-danger">
            <a
              href="/Staff/staffManagementEmployee/leave"
              style={{ textDecoration: "none", color: "white" }}
            >
              Cancel
            </a>
          </button>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </form>
    </div>
  );
}
