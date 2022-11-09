import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GetLeaveDetails from "./GetAllLeaves";

export default function EditLeave() {
  const id = useParams();
  var z = id.id;
  var leave = GetLeaveDetails();
  var i = 0;
  var details = {};
  //var name = "";
  for (i = 0; i < leave.length; i++) {
    if (leave[i]._id == z) {
      details.id = leave[i].leaveID;
      details.empID = leave[i].empID;
      details.status = leave[i].status;
      details.type = leave[i].type;
      details.startDate = leave[i].startDate;
      details.endDate = leave[i].endDate;
      details.noOfDays = leave[i].noOfDays;
      details.description = leave[i].description;
      details.reasonOfStat = leave[i].reasonOfStat;
      break;
    }
  }

  console.log(z);
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [noOfDays, setNoOfDays] = useState("");
  const [description, setDescription] = useState("");

  function updateData(e) {
    e.preventDefault();

    const editLeave = {
      leaveID: leave[i].leaveID,
      empID: leave[i].empID,
      status: leave[i].status,
      type,
      startDate,
      endDate,
      noOfDays,
      description,
      reasonOfStat: leave[i].reasonOfStat,
    };

    let port = window.location.port;

    axios
      .put("http://localhost:8070/leave/update/" + z, editLeave)
      .then(() => {
        alert("Updated Successfully!");
        window.location.replace(
          `http://localhost:${port}/Staff/staffManagementEmployee/leave`
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
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
        onSubmit={updateData}
        style={{ marginTop: "100px", marginLeft: "-125px", width: "100%" }}
      >
        <h1
          className="display-6"
          style={{ marginBottom: "40px", zIndex: "200" }}
        >
          Edit Leave Application
        </h1>

        {/* <div className="mb-3">
          <label htmlFor="EmpID" className="form-label">
            Employee ID
          </label>
          <input
            type="text"
            id="empID"
            name="empID"
            className="form-control"
            required
            readOnly
            value={details.empID}
          />
        </div> */}

        <div className="mb-3">
          <label htmlFor="StartDate" className="form-label">
            Edit Date of Absence From : {details.startDate}
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
            Edit Date of Absence To : {details.endDate}
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
            Number of Days
          </label>
          <input
            type="number"
            id="noOfDays"
            name="noOfDays"
            className="form-control"
            placeholder={details.noOfDays}
            onChange={(event) => {
              setNoOfDays(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Type" className="form-label">
            Edit Type : {details.type}
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
            Edit Reason
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            cols="50"
            placeholder={details.description}
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
            Update
          </button>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </form>
    </div>
  );
}
