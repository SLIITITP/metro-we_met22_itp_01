import React from "react";


export default function NavbarLogin() {
  //const user = JSON.parse(localStorage.getItem('currentUser'));
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-item active" href="/first/home">BLUE LAGOON </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto"  >
          <li class="nav-item ">
              <a class="nav-link" href="/login" >
                Login
              </a>
            </li>
            <li class="nav-item  ">
              <a class="nav-link" href="/first/register" >
                Register 
              </a>
            </li>
            
            <li class="nav-item ">
              <a class="nav-link" href="/first/login" >
                Book Now
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
}
