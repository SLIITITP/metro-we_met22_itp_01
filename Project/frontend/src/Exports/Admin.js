import "../App.css";
import MainNavigationAdmin from "../components/MainNavigationAdmin";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComplaintReport from "../components/CustomerService/CustomerServiceAdmin/complaints/complaintReport";
import SideNavForCustServReport from "../components/CustomerService/CustomerServiceAdmin/complaints/SideNavForCustServReport";
import TransportReport from "../components/CustomerService/CustomerServiceAdmin/transport/transportReport";

// parking
import Dashboard from "../components/ParkingManagement/pages/dashboard";
import Initialize from "../components/ParkingManagement/pages/initialize";
import Report from "../components/ParkingManagement/pages/report";
import Header from "../components/ParkingManagement/header/header";
import SideNavigationParkAdmin from "../components/ParkingManagement/header/SideNavigationParkAdmin";

//Employee
import SideNavAttendance from "../components/StaffManagementAdmin/attendance/SideNavAttendance";
import SideNavEmployee from "../components/StaffManagementAdmin/employees/SideNavEmployee";
import SideNavInvoice from "../components/StaffManagementAdmin/invoice/SideNavInvoice";
import SideNavLeave from "../components/StaffManagementAdmin/leave/SideNavLeave";

export default function CustServ() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/*" element={<MainNavigationAdmin />} />
      </Routes>

      <Routes>
        <Route
          path="/admin/customerservice/*"
          element={<SideNavForCustServReport />}
        />
      </Routes>

      <Routes>
        <Route
          path="/admin/customerservice/complaint"
          element={<ComplaintReport />}
        />
      </Routes>

      <Routes>
        <Route
          path="/admin/customerservice/transport"
          element={<TransportReport />}
        />
      </Routes>
      <Routes>
        <Route
          path="/admin/park"
          element={
            <>
              <Dashboard />
              <SideNavigationParkAdmin />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/admin/addPark"
          element={
            <>
              <Initialize />
              <SideNavigationParkAdmin />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/admin/parkreport"
          element={
            <>
              <Report />
              <SideNavigationParkAdmin />
            </>
          }
        />
      </Routes>

      {/* Zainab's */}
      <Routes>
        <Route
          path="/admin/staffManagement"
          element={
            <>
              <SideNavAttendance />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/admin/staffManagement/employees"
          element={
            <>
              <SideNavEmployee />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/admin/staffManagement/invoice"
          element={
            <>
              <SideNavInvoice />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/admin/staffManagement/leave"
          element={
            <>
              <SideNavLeave />
            </>
          }
        />
      </Routes>
    </div>
  );
}
