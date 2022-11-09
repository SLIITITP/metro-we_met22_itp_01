import React, { useState } from "react";
import axios from "axios";
import GetEmployeeDetails from "./GetAllEmployees";
import { useParams } from "react-router-dom";

export default function EditEmployee() {
  const id = useParams();
  var z = id.id;
  var employee = GetEmployeeDetails();
  var i = 0;
  var details = {};
  //var name = "";
  for (i = 0; i < employee.length; i++) {
    if (employee[i]._id == z) {
      details.name = employee[i].name;
      details.designation = employee[i].designation;
      details.deptName = employee[i].deptName;
      details.hourlyPay = employee[i].hourlyPay;
      details.otRate = employee[i].otRate;
      details.address = employee[i].address;
      details.phone = employee[i].phone;
      break;
    }
  }

  console.log(z);
  const [designation, setDesig] = useState("");
  const [deptName, setDeptName] = useState("");
  const [hourlyPay, setHourlyPay] = useState(0);
  const [otRate, setOtRate] = useState(0);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  function updateData(e) {
    e.preventDefault();

    const editEmployee = {
      empID: employee[i].empID,
      name: employee[i].name,
      designation,
      deptName,
      hourlyPay,
      otRate,
      NIC: employee[i].NIC,
      DOB: employee[i].DOB,
      gender: employee[i].gender,
      address,
      email: employee[i].email,
      phone,
    };

    let port = window.location.port;

    axios
      .put("http://localhost:8070/employee/update/" + z, editEmployee)
      .then(() => {
        alert("Updated Successfully!");
        window.location.replace(
          `http://localhost:${port}/staffManagement/employees`
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
          Edit Employee
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
            readOnly
            value={details.name}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="designation" className="form-label">
            Designation
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            className="form-control"
            placeholder={details.designation}
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
            placeholder={details.hourlyPay}
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
            placeholder={details.otRate}
            onChange={(event) => {
              setOtRate(event.target.value);
            }}
          />
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
            placeholder={details.address}
            onChange={(event) => {
              setAddress(event.target.value);
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
            placeholder={details.phone}
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
