import React from "react";
import { Navbar, NavLink, Button, Nav } from "react-bootstrap";

const Header = () => {
  let loggedinUser = localStorage.getItem("loggedinUser");
  let canInitialize = false;
  let canSeeReports = false;
  let canSeeFeedbacks = false;
  let canGiveFeedback = false;
  let canSeeMyFeedbacks = false;

  if (loggedinUser) {
    loggedinUser = JSON.parse(loggedinUser);
    canInitialize = loggedinUser.previlage.canInitialize;
    canSeeReports = loggedinUser.previlage.canSeeReports;
    canSeeFeedbacks = loggedinUser.previlage.canSeeFeedbacks;
    canGiveFeedback = loggedinUser.previlage.canGiveFeedback;
    canSeeMyFeedbacks = loggedinUser.previlage.canSeeMyFeedbacks;
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/park">Parking Management</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {loggedinUser == null ? <NavLink href="/park">Layout</NavLink> : null}
          {canInitialize ? <NavLink href="/addPark">Initialize</NavLink> : null}
          {canSeeReports ? <NavLink href="/parkreport">Reports</NavLink> : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
