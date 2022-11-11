import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "../../Loader";
import Error from "../../Error";

import {Link} from 'react-router-dom'
import Navbar from "../../Navbar";
export default function LoginScreen() {
  //localStorage.setItem('currentUser',null)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [loading, setloading] = useState(false);
  const [error, setError] = useState();
  const [items, setItems] = useState([]);

  
  
  async function Login() {

    const user = {

      email,
      password,

    }
    try{
      //console.log(user)
      setloading(true)
      const result = await axios.post("http://localhost:8070/users/login" ,{user})
      console.log(result.data)
      setloading(false)
      if (result.data.message){
        //console.log('login failed')
        alert('Login failed')
      }else{
      localStorage.setItem('currentUser',JSON.stringify(result.data));
       //localStorage.setItem('currentUser',1);

      // JSON.parse(localStorage.getItem("currentUser"));
      
      
     //<Navbar data={result.data}/> 
      window.location.href = '/user/room';

      }
    }catch (error){
      console.log(error)
      setloading(false)
      setError(true)
    }
    //console.log(user)
    //console.log('login success')
  }
 
  return (
    <div>
      
      {loading && (<Loader/>)}
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          {error && (<Error message='Invalid credentials..'/>)}
          <div className="bs">
            <h1 style={{ fontSize: "30px", padding: "20px" }}>Login</h1>
            <input
              type="email"
              className="form-control mt-10"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => {
                setemail(e.target.value)
              }}
            />
            <br />
            <input
              type="password"
              className="form-control mt-10"
              placeholder="Your Password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value)
              }}
            />
            <br />
            <button
              className="btn btn-primary mt-3"
              style={{
                backgroundColor: "black",
                color: "white",
                boxShadow: "none",
                marginRight: "4px",
              }}
              onClick={Login}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}