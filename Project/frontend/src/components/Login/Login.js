import React, { Component, useState } from "react";
import axios from "axios";
import GetEmployeeDetails from "./getAllEmployees";

export default function LoginPage() {
  const [username, setEmail] = useState("");
  const [email, setEmailCust] = useState("");
  const [password, setPwd] = useState("");

  var allEmp = GetEmployeeDetails();

  const staff = {
    username,
    password,
  };

  const user = {
    email,
    password,
  };

  var i = 0;

  async function Verify() {
    try {
      const result = await axios.post(
        "http://localhost:8070/employeelogin/login",
        {
          staff,
        }
      );

      if (result.data.message) {
        /* Here we check if the user is not a customer */
        try {
          const custResult = await axios.post(
            "http://localhost:8070/users/login",
            {
              user,
            }
          );

          if (custResult.data.message) {
            alert("Incorrect UserName/Password");
          } else {
            console.log("Welcome User");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        //checking if the user is an employee
        localStorage.setItem("currentUser", JSON.stringify(result.data));

        let loggedId = result.data.empID;

        for (var k = 0; k < allEmp.length; k++) {
          if (loggedId === allEmp[k].empID) break;
        }

        if (allEmp[k].designation.trim().slice(-7) === "Manager")
          console.log("Hello Manager");
        else console.log("Hello Employee");

        //To find the employee's designation

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
      <center>
        <form style={{ width: "40%", marginTop: "150px" }}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailCust(e.target.value);
              }}
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
            <button type="button" className="btn btn-primary" onClick={Verify}>
              Submit
            </button>
          </div>
        </form>
      </center>
    </div>
  );
}
