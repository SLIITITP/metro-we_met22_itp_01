import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingScreen() {
  return (
    <div classname='row landing justify-content-center' style={{backgroundColor:"black", height:"100vh",paddingLeft:"200px"}}>
        
        <div className='col-md-9 my-auto' style={{paddingTop:"50px",marginTop:"50px"}}>
            <h2 style={{fontSize:"40px",color:"white"}}>Welcome to</h2>
            <h1 style={{fontSize:"80px",color:"white"}}>The Blue Lagoon Resort,</h1>
            <h2 style={{fontSize:"40px",color:"white"}}>Kalpitiya</h2>
            <Link to="/first/login">
            <button className='btn btn-primary' style={{backgroundColor:"white",color:"black",border:"black",marginTop:"20px"}}>Get Started</button>
            </Link>
        
            <br></br><br></br><br></br><br></br>
            <div style={{textAlign:"center",marginTop:"80px"}}>
          <p style={{color:"white"}}><b>Address:</b></p>
          <p  style={{color:"white"}}><b>The Blue Lagoon Resort, Kudawa Road, Sethawadiya, Kalpitiya, Sri Lanka</b></p>
          <p  style={{color:"white"}}><b>Phones:</b></p>
          <p  style={{color:"white"}}><b>Contact us directly at +94 77 620 3736</b></p>
          <p style={{color:"white"}}><b>E-mail:</b></p>
          <p style={{color:"white"}}><b>info@thebluelagoonresort.com</b></p>
          <p style={{color:"white"}}><b>reservations@thebluelagoonresort.com</b></p>
          </div>
        </div>
        
    </div>
  )
}
