import React, { useState } from "react";
import axios from "axios";
import { renderMatches } from "react-router-dom";
import GetLeaveDetails from "./GetAllLeaves";
import GetOneLeave from "./GetOneLeave";
import GetEmployeeDetails from "../../Employee/Content/GetAllEmployees";
//import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function GetLeavesManager() {
  const [show, setShow] = useState(false);
  const [id, setID] = useState(null);
  const handleClose = () => {
    setShow(false);
    setID(null);
  };
  function handleShow(id) {
    setID(id);
    setShow(true);
  }

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

  //To not display the cancelled leaves on the manager's interface
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

  const [leaveReqCancel, setLeaveReqCancel] = useState({});
  let i = 0;
  var leaveID;

  const [reasonOfStat, setReasonOfStat] = useState("");

  //To reject a pending request
  function rejectRequest(id) {
    for (i = 0; i < leaveDetails.length; i++) {
      if (leaveDetails[i]._id == id) {
        break;
      }
    }

    leaveID = leaveDetails[i].leaveID;

    <GetOneLeave id={id} />;
    setLeaveReqCancel(GetOneLeave);

    leaveReqCancel.status = "Rejected";
    leaveReqCancel.reasonOfStat = reasonOfStat;

    axios
      .put("http://localhost:8070/leave/update/" + id, leaveReqCancel)
      .then((info) => {
        console.log(info);
        //alert("Leave Request Rejected");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  //To approve a pending request
  function approveRequest(id) {
    for (i = 0; i < leaveDetails.length; i++) {
      if (leaveDetails[i]._id == id) {
        break;
      }
    }

    leaveID = leaveDetails[i].leaveID;

    <GetOneLeave id={id} />;
    setLeaveReqCancel(GetOneLeave);

    leaveReqCancel.status = "Approved";
    leaveReqCancel.reasonOfStat = "Leave request approved";
    axios
      .put("http://localhost:8070/leave/update/" + id, leaveReqCancel)
      .then((info) => {
        console.log(info);
        //alert("Leave Request Approved");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function changeColor(data) {
    if (data === "Cancelled") color = "red";
    else if (data === "Rejected") color = "red";
    else if (data === "Approved") color = "green";
    else if (data === "Pending") color = "#0d6efd";
  }

  return (
    <>
      <div
        className="container"
        style={{ float: "right", marginRight: "-1200px" }}
      >
        {/* <form
          class="form-inline my-2 my-lg-0"
          onSubmit={(e) => {
            setSearch(e.target.search.value);
            e.preventDefault();
            e.window.location.reload(false);
          }}
        >
          <input
            class="form-control mr-sm-2"
            type="search"
            id="search"
            placeholder="Search Leave"
            aria-label="Search"
          />

          <button class="btn btn-primary my-2 my-sm-0" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form> */}
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
              <th scope="col">Action</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {final
              ? final
                  .filter((val) => {
                    if (search === "") return val;
                    else if (
                      val.status.toLowerCase().includes(search.toLowerCase())
                      // val.name.toLowerCase().includes(search.toLowerCase())
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
                      <td>
                        <a
                          data-toggle="tooltip"
                          data-placement="top"
                          title="View"
                          className="btn btn-sm btn-primary"
                          href={`/Manager/manageLeaves/getLeave/${val._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <i className="fa-regular fa-eye"></i>
                        </a>
                      </td>
                      <td>
                        {/* To show the approve button only if val.status==="Pending" or  val.status==="Rejected"*/}
                        {(val.status === "Pending" ||
                          val.status == "Rejected") && (
                          <a
                            style={{ color: "white" }}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Approve"
                            className="btn btn-sm btn-success"
                            onClick={(e) => {
                              approveRequest(val._id);
                              window.location.reload(false);
                            }}
                          >
                            <i className="fa-solid fa-check"></i>
                          </a>
                        )}
                      </td>
                      <td>
                        {/* To show the reject button only if val.status==="Pending" or  val.status==="Approved"*/}
                        {(val.status === "Pending" ||
                          val.status === "Approved") && (
                          <a
                            style={{ color: "white" }}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Reject"
                            className="btn btn-sm btn-danger"
                            onClick={() => handleShow(val._id)}
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </a>
                        )}
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Reject Leave Request</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              {/* {onSubmit={() => rejectRequest(id)}} */}
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                              >
                                <Form.Label>Reason Of Rejection</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  id="reasonOfStat"
                                  onChange={(event) => {
                                    setReasonOfStat(event.target.value);
                                  }}
                                />
                              </Form.Group>
                            </Form>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button
                              type="submit"
                              variant="primary"
                              onClick={(e) => {
                                rejectRequest(id);
                                handleClose();
                                window.location.reload(false);
                              }}
                            >
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </td>
                    </tr>
                  ))
              : final}
          </tbody>
        </table>
        <br></br>
      </div>
    </>
  );
}
