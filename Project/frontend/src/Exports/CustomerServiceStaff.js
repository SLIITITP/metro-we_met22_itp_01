import "../App.css";
//import ComplaintStaff from "../components/CustomerService/ComplaintStaff/Content/CreateComplaint";
import { SideNavigationComplaintStaff } from "../components/CustomerService/ComplaintStaff/Component/SideNavigationComplaintStaff";
import DisplayComplaintRequest from "../components/CustomerService/ComplaintStaff/Content/DisplayComplaintPage";

import { MainNavigationStaff } from "../components/CustomerService/ComplaintStaff/Component/MainNavigationStaff";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function CustServStaff() {
  return (
    <Router>
      <div className="App">
        <MainNavigationStaff />

        <Routes>
          <Route
            path="/customerService/complaintStaff"
            element={
              <>
                <DisplayComplaintRequest />
                <ShowComplaintRequestStaff />
                <SideNavigationComplaintStaff />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
