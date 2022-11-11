import React, { useState } from "react";
import axios from "axios";
import { renderMatches } from "react-router-dom";
import GetLeaveDetails from "./GetAllLeaves";
import GetOneLeave from "./GetOneLeave";
//import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function GetLeaveRequestsManager() {
  //To display the details in the edit popup form
  const [show, setShow] = useState(false);
  const [id, setID] = useState(null);
  const [sDate, setSDate] = useState(null);
  const [eDate, setEDate] = useState(null);
  const [cat, setCat] = useState(null);
  const [days, setDays] = useState(null);
  const [desc, setDesc] = useState(null);

  const handleClose = () => {
    setShow(false);
    setID(null);
    setSDate(null);
    setEDate(null);
    setCat(null);
    setDays(null);
    setDesc(null);
  };

  function handleShow(val) {
    setID(val._id);
    setSDate(val.startDate);
    setEDate(val.endDate);
    setCat(val.type);
    setDays(val.noOfDays);
    setDesc(val.description);
    setShow(true);
  }

  const emp = JSON.parse(localStorage.getItem("currentUser")).empID;
  var leaveDetails = GetLeaveDetails();
  var x = 0;
  var details = [];
  for (x = 0; x < leaveDetails.length; x++) {
    if (leaveDetails[x].empID == emp) {
      details.push(leaveDetails[x]);
    }
  }

  //For the status field in the table
  var color = "black";

  //For the search button
  const [search, setSearch] = useState("");

  const [leaveReqCancel, setLeaveReqCancel] = useState({});
  const [editLeave, setEditLeave] = useState({});
  let i = 0;

  // const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [noOfDays, setNoOfDays] = useState("");
  const [description, setDescription] = useState("");

  //To edit a pending request
  function EditRequest(id) {
    <GetOneLeave id={id} />;
    setEditLeave(GetOneLeave);

    //editLeave.type = type;
    editLeave.startDate = startDate;
    editLeave.endDate = endDate;
    editLeave.noOfDays = noOfDays;
    editLeave.description = description;

    axios
      .put("http://localhost:8070/leave/update/" + id, editLeave)
      .then((info) => {
        console.log(info);
        // alert("Leave Request Edited");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  //To cancel a pending request
  function CancelRequest(id) {
    <GetOneLeave id={id} />;
    setLeaveReqCancel(GetOneLeave);

    leaveReqCancel.status = "Cancelled";
    leaveReqCancel.reasonOfStat = "Leave request cancelled";
    axios
      .put("http://localhost:8070/leave/update/" + id, leaveReqCancel)
      .then((info) => {
        console.log(info);
        alert("Leave Request Cancelled");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function changeColor(data) {
    if (data === "Cancelled") color = "red";
    else if (data === "Approved") color = "green";
    else if (data === "Rejected") color = "red";
    else if (data === "Pending") color = "#0d6efd";
  }

  return (
    <>
      <div
        className="container"
        style={{ float: "right", marginRight: "-1100px" }}
      >
        {/* <form
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
            <option value="Cancelled">Cancelled</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </form>
      </div>

      <div
        className="container"
        style={{
          width: "75%",
          float: "center",
          marginTop: "100px",
          marginLeft: "215px",
          position: "sticky",
        }}
      >
        <h1 className="display-6" style={{ marginBottom: "80px" }}>
          Leave Requests
        </h1>

        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
              <th scope="col">LeaveID</th>
              <th scope="col">Absence From</th>
              <th scope="col">Absence To </th>
              <th scope="col">No Of Days</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Reason</th>
              <th scope="col">Action</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {details
              ? details
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
                      <td>{val.startDate}</td>
                      <td>{val.endDate}</td>
                      <td>{val.noOfDays}</td>
                      <td>{val.type}</td>
                      <td>{val.description}</td>
                      <td style={{ color: color }}>{val.status}</td>
                      <td>{val.reasonOfStat}</td>
                      <td>
                        <a
                          data-toggle="tooltip"
                          data-placement="top"
                          title="View Leave Request"
                          className="btn btn-sm btn-primary"
                          href={`/Manager/leave/getLeave/${val._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <i className="fa-regular fa-eye"></i>
                        </a>
                      </td>
                      <td>
                        {/* To show the edit button only if val.status==="Pending */}
                        {val.status === "Pending" && (
                          <a
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Edit Leave Request"
                            className="btn btn-sm btn-warning"
                            // href={`/Manager/leave/editLeave/${val._id}`}
                            onClick={() => handleShow(val)}
                          >
                            <i className="fas fa-edit"></i>
                          </a>
                        )}
                      </td>
                      {/* To show the cancel button only if val.status==="Pending */}
                      <td>
                        {val.status === "Pending" && (
                          <a
                            style={{ color: "white" }}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Cancel Leave Request"
                            className="btn btn-sm btn-danger"
                            onClick={(e) => {
                              CancelRequest(val._id);
                              window.location.reload(false);
                            }}
                          >
                            <i className="fa-regular fa-rectangle-xmark"></i>
                          </a>
                        )}
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Edit Leave Application</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Form.Group className="mb-3">
                                <Form.Label>
                                  Date of Absence From : {sDate}
                                </Form.Label>
                                <Form.Control
                                  type="date"
                                  id="startDate"
                                  onChange={(event) => {
                                    setStartDate(event.target.value);
                                  }}
                                />
                              </Form.Group>

                              <Form.Group className="mb-3">
                                <Form.Label>
                                  Date of Absence To : {eDate}
                                </Form.Label>
                                <Form.Control
                                  type="date"
                                  id="endDate"
                                  onChange={(event) => {
                                    setEndDate(event.target.value);
                                  }}
                                />
                              </Form.Group>

                              <Form.Group className="mb-3">
                                <Form.Label>Number of Days Required</Form.Label>
                                <Form.Control
                                  type="number"
                                  id="noOfDays"
                                  placeholder={days}
                                  onChange={(event) => {
                                    setNoOfDays(event.target.value);
                                  }}
                                />
                              </Form.Group>

                              <Form.Group className="mb-3">
                                <Form.Label>Type</Form.Label>
                                <Form.Control
                                  // as="select"
                                  type="text"
                                  id="type"
                                  value={cat}
                                  readOnly
                                  // onChange={(event) => {
                                  //   setType(event.target.value);
                                  // }}
                                />
                              </Form.Group>

                              <Form.Group className="mb-3">
                                <Form.Label>Reason</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  id="description"
                                  placeholder={desc}
                                  onChange={(event) => {
                                    setDescription(event.target.value);
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
                                EditRequest(id);
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
              : details}
          </tbody>
        </table>
        <br></br>
        <button className="btn btn-success">
          <a
            href="/Manager/leave/createLeave"
            style={{ textDecoration: "none", color: "white" }}
          >
            Request New Leave
          </a>
        </button>
      </div>
    </>
  );
}
