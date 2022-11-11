import React, { useState } from "react";
import axios from "axios";
import { renderMatches } from "react-router-dom";
import GetEmployeeDetails from "./GetAllEmployees";
//import { Link } from "react-router-dom";

export default function GetEmployees() {
  var empDetails = GetEmployeeDetails();

  const [search, setSearch] = useState("");

  function Delete(id) {
    // axios
    //   .delete("http://localhost:8070/employeelogin/delete/" + id)
    //   .then((res) => {
    //     window.location.reload(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios
      .delete("http://localhost:8070/employee/delete/" + id)
      .then((res) => {
        alert("Deleted Succesfully!");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div
        className="container"
        style={{ float: "right", marginRight: "-1020px" }}
      >
        <form
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
            placeholder="Search Employees"
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
          width: "70%",
          float: "center",
          marginTop: "100px",
          marginLeft: "215px",
          position: "sticky",
        }}
      >
        <h1 className="display-6" style={{ marginBottom: "80px" }}>
          All Employees
        </h1>

        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
              <th scope="col">EmpID</th>
              <th scope="col">EmpName</th>
              <th scope="col">Designation</th>
              <th scope="col">Department</th>
              <th scope="col">HourlyPay</th>
              <th scope="col">OtRate</th>
              <th scope="col">NIC</th>
              <th scope="col">DOB</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {empDetails
              ? empDetails
                  .filter((val) => {
                    if (search === "") return val;
                    else if (
                      val.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((val) => (
                    <tr key={val._id}>
                      <td>{val.empID}</td>
                      <td>{val.name}</td>
                      <td>{val.designation}</td>
                      <td>{val.deptName}</td>
                      <td>{val.hourlyPay}</td>
                      <td>{val.otRate}</td>
                      <td>{val.NIC}</td>
                      <td>{val.DOB}</td>
                      <td>{val.gender}</td>
                      <td>{val.address}</td>
                      <td>{val.email}</td>
                      <td>{val.phone}</td>
                      <td>
                        <a
                          data-toggle="tooltip"
                          data-placement="top"
                          title="View"
                          className="btn btn-sm btn-primary"
                          href={`/Manager/employees/getEmployee/${val._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <i className="fa-regular fa-eye"></i>
                        </a>
                      </td>
                      <td>
                        <a
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Edit"
                          className="btn btn-sm btn-warning"
                          href={`/Manager/employees/editEmployee/${val._id}`}
                        >
                          <i className="fas fa-edit"></i>&nbsp;
                        </a>
                      </td>
                      <td>
                        <a
                          style={{ color: "white" }}
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Delete"
                          className="btn btn-sm btn-danger"
                          onClick={(e) => Delete(val._id)}
                        >
                          <i className="far fa-trash-alt"></i>&nbsp;
                        </a>
                      </td>
                    </tr>
                  ))
              : empDetails}
          </tbody>
        </table>
        <br></br>
        <button className="btn btn-success">
          <a
            href="/Manager/employees/createEmployee"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add New Employee
          </a>
        </button>
      </div>
    </>
  );
}
