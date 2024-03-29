import React, { useState } from "react";
import axios from "axios";
import GetAttendanceDetails from "../../Attendance/Content/GetAllAttendance";
import GetInvoiceDetails from "./GetAllInvoice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GetOneInvoice from "./GetOneInvoice";

export default function GetInvoiceManager() {
  //For the search button
  const [search, setSearch] = useState("");
  var currDate = new Date().toISOString().slice(0, 10);

  let invoiceIdString = "1";
  var attendanceList = GetAttendanceDetails();
  var invoiceList = GetInvoiceDetails();

  const [show, setShow] = useState(false);

  const [invoiceID, setInvoiceID] = useState("");
  const [empID, setEmpID] = useState("");
  const [date, setDate] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [shiftHours, setShiftHours] = useState("");
  const [otHours, setOtHours] = useState("");
  const [amount, setAmount] = useState("");

  const [id, setID] = useState("");
  const [dedAmount, setDedAmount] = useState("");
  const [dedReason, setDedReason] = useState("");
  const [allowance, setAllowance] = useState("");
  const [netSalary, setSalary] = useState("");

  const handleClose = () => {
    setShow(false);
    setID(null);
    setSalary(null);
  };

  function handleShow(val) {
    setShow(true);
    setID(val._id);
    setSalary(val.netSalary);
  }

  //To find the last id
  let j = invoiceList.length;
  j--;
  if (j >= 0) {
    let invoiceId = parseInt(invoiceList[j].invoiceID);
    invoiceId++;
    invoiceIdString = invoiceId.toString();
  } else {
    invoiceIdString = "1";
  }

  function sendData(e) {
    e.preventDefault();

    const newInvoice = {
      invoiceID,
      empID,
      date,
      workingHours,
      shiftHours,
      otHours,
      amount,
      netSalary,
    };

    newInvoice.invoiceID = invoiceIdString;
    //Taking only the date from Date()
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var dia = today.getDate();

    const dateString = year + "-" + month + "-" + dia;
    newInvoice.date = dateString;

    let i = 0;
    let salary = 0;
    let shift = 0;
    let ot = 0;
    let totalHours = 0;
    for (i = 0; i < attendanceList.length; i++) {
      if (
        attendanceList[i].empID == empID &&
        attendanceList[i].date.slice(0, 7) == newInvoice.date.slice(0, 7)
      ) {
        {
          salary = salary + attendanceList[i].pay;
          totalHours =
            totalHours +
            attendanceList[i].hours +
            attendanceList[i].minutes / 60;
          shift = shift + attendanceList[i].shiftHours;
          ot = ot + attendanceList[i].otHours;
        }
      }
    }

    newInvoice.workingHours = Math.round(totalHours);
    newInvoice.shiftHours = Math.round(shift);
    newInvoice.otHours = Math.round(ot);
    newInvoice.amount = salary;
    newInvoice.netSalary = salary;

    axios
      .post("http://localhost:8070/invoice/create", newInvoice)
      .then(() => {
        alert("Invoice generated");
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const [editInvoice, setInvoice] = useState({});

  //To edit invoice - deduction and allowance
  function EditInvoice(id) {
    <GetOneInvoice id={id} />;
    setInvoice(GetOneInvoice);

    editInvoice.dedAmount = dedAmount;
    editInvoice.dedReason = dedReason;
    editInvoice.allowance = allowance;

    let totalNet =
      parseInt(netSalary) - parseInt(dedAmount) + parseInt(allowance);
    let totalString = totalNet.toString();
    editInvoice.netSalary = totalNet;

    axios
      .put("http://localhost:8070/invoice/update/" + id, editInvoice)
      .then((info) => {
        console.log(info);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

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
          style={{ marginTop: "100px", marginLeft: "30px", width: "100%" }}
        >
          <h1 className="display-6" style={{ marginBottom: "40px" }}>
            Generate Invoice
          </h1>
          <div
            className="mb-3"
            style={{ float: "left", width: "45%", marginRight: "25px" }}
          >
            <label htmlFor="EmpID" className="form-label">
              Employee ID
            </label>
            {/* <input
              type="text"
              id="empID"
              name="empID"
              className="form-control"
              required
              placeholder="Enter employee id"
              onChange={(event) => {
                setEmpID(event.target.value);
              }}
            /> */}
            <select
              className="form-select"
              id="empID"
              aria-label="Default select example"
              onChange={(event) => {
                setEmpID(event.target.value);
              }}
            >
              <option value="Select">Select Employee ID</option>
              <option value="1111">1111</option>
              <option value="1112">1112</option>
              <option value="1113">1113</option>
              <option value="1114">1114</option>
              <option value="1115">1115</option>
              <option value="1116">1116</option>
              {/* <option value="1117">1117</option>
              <option value="1118">1118</option>
              <option value="1119">1119</option>
              <option value="1120">1120</option> */}
            </select>
          </div>

          <div className="mb-3" style={{ float: "left", width: "25%" }}>
            <label htmlFor="Date" className="form-label">
              Date
            </label>
            <input
              type="text"
              id="date"
              name="date"
              className="form-control"
              value={
                new Date().getFullYear() + "/" + (new Date().getMonth() + 1)
              }
            />
          </div>
          <br></br>

          <div className="container" style={{ marginTop: "10px" }}>
            <button type="submit" className="btn btn-primary">
              Submit
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
              }}
            />
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
          <h1 className="display-6" style={{ marginBottom: "40px" }}>
            View Invoice
          </h1>

          <table className="table">
            <thead>
              <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
                {/* <th scope="col">InvoiceID</th> */}
                <th scope="col">Emp ID</th>
                <th scope="col">Date</th>
                <th scope="col">Working hours </th>
                <th scope="col">Shift Hours</th>
                <th scope="col">Ot Hours</th>
                <th scope="col">Amount</th>
                <th scope="col">Net Salary</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoiceList
                ? invoiceList
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
                        <td>{val.empID}</td>
                        <td>{val.date}</td>
                        <td>{val.workingHours}</td>
                        <td>{val.shiftHours}</td>
                        <td>{val.otHours}</td>
                        <td>{val.amount}</td>
                        <td>{val.netSalary}</td>
                        <td>
                          <a
                            data-toggle="tooltip"
                            data-placement="top"
                            title="View Invoice"
                            className="btn btn-sm btn-primary"
                            href={`/Manager/invoice/getInvoice/${val._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <i className="fa-regular fa-eye"></i>
                          </a>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <a
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Edit Invoice"
                            className="btn btn-sm btn-warning"
                            onClick={() => handleShow(val)}
                          >
                            <i className="fas fa-edit"></i>
                          </a>
                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Deduction & Allowance</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Form>
                                {/* {onSubmit={() => rejectRequest(id)}} */}
                                <Form.Group className="mb-3">
                                  <Form.Label>Amount</Form.Label>
                                  <Form.Control
                                    type="number"
                                    id="dedAmount"
                                    onChange={(event) => {
                                      setDedAmount(event.target.value);
                                    }}
                                  />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                  <Form.Label>Reason for deduction</Form.Label>
                                  <Form.Control
                                    as="textarea"
                                    rows={3}
                                    id="dedReason"
                                    onChange={(event) => {
                                      setDedReason(event.target.value);
                                    }}
                                  />
                                </Form.Group>
                              </Form>

                              <Form.Group className="mb-3">
                                <Form.Label>Allowance</Form.Label>
                                <Form.Control
                                  type="number"
                                  id="dedAmount"
                                  onChange={(event) => {
                                    setAllowance(event.target.value);
                                  }}
                                />
                              </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                              <Button
                                type="submit"
                                variant="primary"
                                onClick={(e) => {
                                  EditInvoice(id);
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
                : invoiceList}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
