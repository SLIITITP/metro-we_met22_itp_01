import React, { useState } from "react";
import axios from "axios";
import GetAttendanceDetails from "./GetAllAttendance";
import DateTime from "./DisplayDateTime";
import GetOneAttendance from "./GetOneAttendance";
import moment from "moment";
import GetEmployeeDetails from "../../../StaffManagement/Employee/Content/GetAllEmployees";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function GetAttendance() {
  //For the search button
  const [search, setSearch] = useState("");

  //Taking only the date from Date()
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var dia = today.getDate();

  var dateString = year + "-" + month + "-" + dia;

  var time = today.toLocaleTimeString();

  const [newAtten, setnewAtten] = useState({
    // attenID: "",
    // empID: "",
    date: dateString,
    checkIn: time,
  });

  let attenIdString = "1";
  var attendanceList = GetAttendanceDetails();
  var employee = GetEmployeeDetails();

  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [attenID, setAttenID] = useState("");
  const [empID, setEmpID] = useState("");
  const [date, setDate] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [hourlyPay, setHourlyPay] = useState(null);
  const [otRate, setOtRate] = useState(null);
  const [totalPay, setTotalPay] = useState(null);

  const handleClose = () => {
    setShow(false);
    setAttenID(null);
    setEmpID(null);
    setDate(null);
    setCheckIn(null);
    setCheckOut(null);
    setHours(null);
    setMinutes(null);
    setHourlyPay(null);
    setOtRate(null);
    setTotalPay(null);
  };

  function handleShow(val) {
    setShow(true);
    setAttenID(val.attenID);
    setEmpID(val.empID);
    setDate(val.date);
    setCheckIn(val.checkIn);
    setCheckOut(val.checkOut);
    setHours(val.hours);
    setMinutes(val.minutes);
    setHourlyPay(val.hourlyPay);
    setOtRate(val.otRate);
    setTotalPay(val.pay);
  }

  function sendData(e) {
    e.preventDefault();

    //To find the last id
    let j = attendanceList.length;
    j--;
    if (j >= 0) {
      let attenId = parseInt(attendanceList[j].attenID);
      attenId++;
      attenIdString = attenId.toString();
      setAttenID(attenIdString);
    } else {
      setAttenID(attenIdString);
    }

    newAtten.attenID = attenIdString;

    var empIDHardCoded;
    if (document.getElementById("empID") != null)
      empIDHardCoded = document.getElementById("empID").value;

    newAtten.empID = empIDHardCoded;

    axios
      .post("http://localhost:8070/attendance/create", newAtten)
      .then(() => {
        alert("Logged in check in time.");
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }
  let i = 0;

  const [editAtten, setEditAtten] = useState({});

  //To end the shift and update the table
  function endShift(id) {
    for (i = 0; i < attendanceList.length; i++) {
      if (attendanceList[i]._id == id) {
        for (let j = 0; j < employee.length; j++) {
          if (employee[j].empID == attendanceList[i].empID) {
            editAtten.hourlyPay = employee[j].hourlyPay;
            editAtten.otRate = employee[j].otRate;
          }
        }
        break;
      }
    }

    //Taking only the date from Date()
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var dia = today.getDate();

    var time = new Date().toLocaleTimeString();

    var startDate = attendanceList[i].date + " " + attendanceList[i].checkIn;
    var endDate = year + "-" + month + "-" + dia + " " + time;

    <GetOneAttendance id={id} />;
    setEditAtten(GetOneAttendance);
    editAtten.checkOut = time;

    //Start time and End Time

    //var startTime = moment(attendanceList[i].checkIn, "HH:mm:ss a");

    // var startTime = moment(startDate, "YYYY-MM-DD HH:mm:ss");

    var startTime = moment(startDate, "YYYY-MM-DD HH:mm:ss A");

    //var endTime = moment(time, "HH:mm:ss a");

    // var endTime = moment(endDate, "YYYY-MM-DD HH:mm:ss");

    var endTime = moment(endDate, "YYYY-MM-DD HH:mm:ss A");

    //Calculate total duration
    var duration = moment.duration(endTime.diff(startTime));
    // Total duration in hours
    var hours = parseInt(duration.asHours());
    //Total duration in hours
    var mins = parseInt(duration.asMinutes()) % 60;
    var totalHours = hours + mins / 60;

    if (totalHours >= 8) {
      var ot = totalHours - 8;
      var otPay =
        [(editAtten.otRate / 100) * editAtten.hourlyPay + editAtten.hourlyPay] *
        ot;
      var notOtPay = 8 * editAtten.hourlyPay;

      var totalPay = Math.floor(notOtPay + otPay);
    } else {
      var totalPay = Math.floor([hours + mins / 60] * editAtten.hourlyPay);
    }

    editAtten.hours = hours;
    editAtten.minutes = mins;
    editAtten.pay = totalPay;

    axios
      .put("http://localhost:8070/attendance/update/" + id, editAtten)
      .then((info) => {
        console.log(info);
        alert("Logged in check out time");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function validateAttendance() {
    var empIdhard;

    if (document.getElementById("empID") != null)
      empIdhard = document.getElementById("empID").value;

    for (var z = 0; z < attendanceList.length; z++) {
      if (
        attendanceList[z].date === dateString &&
        attendanceList[z].empID === empIdhard
      )
        if (document.getElementById("startShift") != null)
          document.getElementById("startShift").disabled = true;
    }
  }

  validateAttendance();

  return (
    <div
      className="container"
      style={{
        width: "70%",
        position: "sticky",
      }}
    >
      <div>
        <form
          onSubmit={sendData}
          style={{ marginTop: "100px", marginLeft: "-5px", width: "100%" }}
        >
          <h1
            className="display-6"
            style={{ marginBottom: "40px", zIndex: "200" }}
          >
            Mark Attendance
          </h1>
          <div
            className="mb-3"
            style={{ float: "left", width: "45%", marginRight: "25px" }}
          >
            <label htmlFor="EmpID" className="form-label">
              Employee ID
            </label>
            <input
              type="text"
              id="empID"
              name="empID"
              className="form-control"
              required
              value="12344"
              placeholder="Enter employee id"
              // onChange={(e) => {
              //   setnewAtten({
              //     ...newAtten,
              //     empID: e.target.value,
              //   });
              // }}
            />
          </div>

          <DateTime></DateTime>
          <br></br>
          <br></br>
          <br></br>
          <div className="container">
            <button type="submit" id="startShift" className="btn btn-primary">
              Start Shift
            </button>
          </div>
        </form>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div
        className="container"
        style={{ marginLeft: "-150px", marginTop: "-75px" }}
      >
        <div
          className="container"
          style={{ float: "right", marginRight: "-900px" }}
        >
          <form
            class="form-inline my-2 my-lg-0"
            onSubmit={(e) => {
              setSearch(e.target.search.value);
              e.preventDefault();
            }}
          >
            <input
              class="form-control mr-sm-2"
              type="search"
              id="search"
              placeholder="Search Date"
              aria-label="Search"
            />

            <button class="btn btn-primary my-2 my-sm-0" type="submit">
              <i class="bi bi-search"></i>
            </button>
          </form>
        </div>

        <div
          className="container"
          style={{
            width: "100%",
            float: "center",
            marginTop: "100px",
            marginLeft: "150px",
            position: "sticky",
          }}
        >
          <h1
            className="display-6"
            style={{ marginBottom: "40px", zIndex: "200" }}
          >
            View Attendance
          </h1>

          <table className="table">
            <thead>
              <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
                {/* <th scope="col">AttenID</th> */}
                <th scope="col">Date</th>
                <th scope="col">Check In Time </th>
                <th scope="col">Check Out Time</th>
                <th scope="col">Worked Hours</th>
                <th scope="col">Total Pay</th>
                <th scope="col">Action</th>
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
                        {/* <td>{val.attenID}</td> */}
                        <td>{val.date}</td>
                        <td>{val.checkIn}</td>
                        <td>{val.checkOut}</td>
                        <td>{val.hours}</td>
                        <td>{val.pay}</td>
                        <td>
                          {/* To show the end shift button only if val.checkIn === "Log checkout time"*/}
                          {val.checkOut === "Log checkout time" && (
                            <a
                              style={{ color: "white" }}
                              data-toggle="tooltip"
                              data-placement="top"
                              title="End Shift"
                              className="btn btn-sm btn-danger"
                              onClick={(e) => {
                                endShift(val._id);
                                window.location.reload(false);
                              }}
                            >
                              End Shift
                            </a>
                          )}
                          {/* To show the view button only if val.checkIn != "Log checkout time"*/}
                          {val.checkOut != "Log checkout time" && (
                            <a
                              style={{ color: "white", textDecoration: "none" }}
                              data-toggle="tooltip"
                              data-placement="top"
                              title="View Pay Details"
                              className="btn btn-sm btn-primary"
                              onClick={() => handleShow(val)}
                            >
                              View Pay
                            </a>
                          )}
                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Pay For The Day</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                              <Container>
                                <table
                                  className="table"
                                  style={{
                                    border: "2px solid ",
                                    borderColor: " #96D4D4",
                                  }}
                                >
                                  <tr>
                                    <th
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      Date :
                                    </th>
                                    <td
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      {date}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      Check In Time :
                                    </th>
                                    <td
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      {checkIn}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      Check Out Time :
                                    </th>
                                    <td
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      {checkOut}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      Worked Hours :
                                    </th>
                                    <td
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      {hours}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      Worked Minutes :
                                    </th>
                                    <td
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      {minutes}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      Hourly Pay :
                                    </th>
                                    <td
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      {hourlyPay}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      Ot Rate :
                                    </th>
                                    <td
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      {otRate}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      Total Pay :
                                    </th>
                                    <td
                                      style={{
                                        border: "2px solid ",
                                        borderColor: " #96D4D4",
                                      }}
                                    >
                                      {totalPay}
                                    </td>
                                  </tr>
                                </table>
                              </Container>
                            </Modal.Body>

                            <Modal.Footer>
                              <Button variant="primary" onClick={handleClose}>
                                Close
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </td>
                      </tr>
                    ))
                : attendanceList}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
