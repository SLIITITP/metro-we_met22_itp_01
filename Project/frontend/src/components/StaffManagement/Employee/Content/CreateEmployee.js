import React, { useState } from "react";
import axios from "axios";
import GetEmployeeDetails from "./GetAllEmployees";

export default function CreateEmployee() {
  let empIdString = "1111";
  const empList = GetEmployeeDetails();

  const [empID, setID] = useState("");
  const [empName, setName] = useState("");
  const [desig, setDesig] = useState("");
  const [deptName, setDeptName] = useState("Temporary");
  const [hourlyPay, setHourlyPay] = useState("");
  const [otRate, setOtRate] = useState("");
  const [NIC, setNIC] = useState("");
  const [password, setPassword] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  //To find the last id
  let j = empList.length;
  j--;
  if (j >= 0) {
    let empId = parseInt(empList[j].empID);
    empId++;
    empIdString = empId.toString();
  } else {
    empIdString = "1111";
  }

  function sendData(e) {
    e.preventDefault();

    var newEmployee = {
      empID,
      empName,
      desig,
      deptName,
      hourlyPay,
      otRate,
      NIC,
      DOB,
      gender,
      address,
      email,
      phone,
    };

    newEmployee.empID = empIdString;

    var newEmployeeLogin = {
      username,
      password,
      empID,
    };

    newEmployeeLogin.empID = empIdString;

    axios
      .post("http://localhost:8070/employee/create", newEmployee)
      .then(() => {
        //window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });

    axios
      .post("http://localhost:8070/employeelogin/create", newEmployeeLogin)
      .then(() => {
        alert("Employee & Login Added");
        window.location.replace(
          "http://localhost:3000/staffManagement/employees"
        );
      })
      .catch((err) => {
        alert(err);
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
        onSubmit={sendData}
        style={{ marginTop: "100px", marginLeft: "-125px", width: "100%" }}
      >
        <h1
          className="display-6"
          style={{ marginBottom: "40px", zIndex: "200" }}
        >
          Add New Employee
        </h1>

        <div className="mb-3">
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
        </div>

        <div className="mb-3">
          <label htmlFor="Desig" className="form-label">
            Designation
          </label>
          <input
            type="text"
            id="desig"
            name="desig"
            className="form-control"
            placeholder="Enter the job role of the employee"
            onChange={(event) => {
              setDesig(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Dept" className="form-label">
            Department
          </label>
          <select
            className="form-select"
            id="deptName"
            aria-label="Default select example"
            onChange={(event) => {
              setDeptName(event.target.value);
            }}
          >
            <option value="Select">Select</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Accounts">Accounts</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="HourlyPay" className="form-label">
            Hourly Pay
          </label>
          <input
            type="number"
            id="hourlyPay"
            name="hourlyPay"
            min="1"
            max="5000"
            step=".01"
            className="form-control"
            placeholder="Enter the pay for an hour"
            onChange={(event) => {
              setHourlyPay(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="OtRate" className="form-label">
            Overtime Rate
          </label>
          <input
            type="number"
            id="otRate"
            name="otRate"
            min="1"
            max="10"
            step=".01"
            className="form-control"
            placeholder="Enter the ot rate for an hour"
            onChange={(event) => {
              setOtRate(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="NIC" className="form-label">
            NIC
          </label>
          <input
            type="text"
            id="NIC"
            name="NIC"
            className="form-control"
            placeholder="National Identification Card Number"
            onChange={(event) => {
              setNIC(event.target.value);
              setPassword(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="DOB" className="form-label">
            Date Of Birth
          </label>
          <input
            type="date"
            id="DOB"
            name="DOB"
            className="form-control"
            onChange={(event) => {
              setDOB(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Gender" className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            id="gender"
            aria-label="Default select example"
            onChange={(event) => {
              setGender(event.target.value);
            }}
          >
            <option value="Select">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="Address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            rows="4"
            cols="50"
            placeholder="Enter the residential address..."
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter employee email address"
            onChange={(event) => {
              setEmail(event.target.value);
              setUsername(event.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="PhoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0][7][1-9]{8}"
            className="form-control"
            placeholder="Enter phone number in the format 07XXXXXXX"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
        <br></br>
        <div className="container">
          <button type="submit" className="btn btn-danger">
            <a
              href="/staffManagement/employees"
              style={{ textDecoration: "none", color: "white" }}
            >
              Cancel
            </a>
          </button>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
          <button type="submit" className="btn btn-primary">
            Create
          </button>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </form>
    </div>
  );
}
