import React, { useState } from "react";
import GetEmployeeDetails from "../../StaffManagement/Employee/Content/GetAllEmployees";
import { jsPDF } from "jspdf";

export default function DisplayEmployees() {
  const createPDF = async () => {
    const date = new Date().toISOString().split("T")[0];
    const pdf = new jsPDF("landscape", "px", "a1", false);
    const data = await document.querySelector("#employees");
    pdf.html(data).then(() => {
      pdf.save("Employees Report " + date + ".pdf");
    });
  };

  const [search, setSearch] = useState("");

  var empDetails = GetEmployeeDetails();

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
        id="employees"
        style={{
          width: "70%",
          float: "center",
          marginTop: "100px",
          marginLeft: "215px",
          position: "sticky",
        }}
      >
        <h1 className="display-6" style={{ marginBottom: "40px" }}>
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
                    </tr>
                  ))
              : empDetails}
          </tbody>
        </table>
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
        <br></br>
      </div>
    </>
  );
}
