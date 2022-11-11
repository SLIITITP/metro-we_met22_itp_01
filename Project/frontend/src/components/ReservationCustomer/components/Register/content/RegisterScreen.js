import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "../../Loader";
import Error from "../../Error";
import Success from "../../Success";
//import Navbar from "../../Navbar";


export default function RegisterScreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [success,setsuccess] = useState()
  const [loading, setloading] = useState(false);
  const [error, setError] = useState();
  async function register() {
    if (password == cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      try {
        setloading(true)
        const result = await axios.post("http://localhost:8070/users/register" ,user).data
        setloading(false)
        setsuccess(true)

        setname('')
        setemail('')
        setpassword('')
        setcpassword('')

    } catch (error) {
        console.log(error);
        setloading(false);
        setError(true);
      }
    } else {
      alert("Passwords not matched");
    }
  }
  return (
    <div>
    
        {loading && (<Loader/>) }
        {error && (<Error/>)}
        
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
        {success && (<Success message='Registration success' />)}
          <div className="bs">
            <h1 style={{ fontSize: "30px", padding: "20px" }}>Register</h1>
            <input
              type="text"
              className="form-control mt-10"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <br />
            <input
              type="email"
              className="form-control mt-10"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <br />
            <input
              type="password"
              className="form-control mt-10"
              placeholder="Your Password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <br />
            <input
              type="password"
              className="form-control mt-10"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <button
              className="btn btn-primary mt-3"
              style={{
                backgroundColor: "black",
                color: "white",
                boxShadow: "none",
                marginRight: "4px",
              }}
              onClick={register}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
