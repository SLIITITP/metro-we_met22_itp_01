import React, { Component, useState } from "react";
import axios from "axios";
import GetEmployeeDetails from "./getAllEmployees";

export default function LoginPage() {
  const [username, setEmail] = useState("");
  const [password, setPwd] = useState("");

  var allEmp = GetEmployeeDetails();

  const user = {
    username,
    password,
  };

  var i = 0;

  async function Verify(userObj) {
    try {
      const result = await axios.post(
        "http://localhost:8070/employeelogin/login",
        {
          userObj,
        }
      );

      if (result.data.message) {
        /* Here we know the user is not an employee. So we write some code to
        check if he is either a customer or an admin */
      } else {
        //checking if the user is an employee
        localStorage.setItem("currentUser", JSON.stringify(result.data));

        let loggedEmp = result.data;

        for (i = 0; i < allEmp.length; i++) {
          if (loggedEmp.empID === allEmp[i].empID) break;
        }

        //localStorage.setItem('currentUser',1);
        // JSON.parse(localStorage.getItem("currentUser"));

        //<Navbar data={result.data}/>
        // window.location.href = "/room/";
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form style={{ width: "60%", marginLeft: "70px" }}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <div className="mb-3"></div>
        <div className="d-grid">
          <button
            type="button"
            className="btn btn-primary"
            onClick={Verify(user)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
