import React from "react";


export default function Navbar() {
 const user = JSON.parse(localStorage.getItem("currentUser"));
 // console.log(localStorage.getItem("currentUser"));
  
  //console.log(props.data);


  function logout(){
    //localStorage.removeItem("currentUser");
    window.localStorage.clear();
    window.location.href="/first/login"
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="/first/home" >
          BLUE LAGOON
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"><i class="fa fa-bars" ></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-5" >
            {user ? (
              <>
                <div class="dropdown" >
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                   <i class="fa fa-user"></i> {user.name}
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="/user/profile" >
                      Profile
                    </a>
                    <a class="dropdown-item" href="/first/login" onclick = {logout} >
                      Logout
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
              <li class="nav-item active ">
                  <a class="nav-link" href="/first/#">
                   Login
                  </a>
                </li>
                <li class="nav-item active ">
                  <a class="nav-link" href="/first/register">
                    Register
                  </a>
                </li>

                <li class="nav-item ">
                  <a class="nav-link" href="/first/login" >
                    Book Now
                  </a>
                </li>
              </>
            )}
          </ul>
        </div> 
      </nav>
    </div>
  );
}
