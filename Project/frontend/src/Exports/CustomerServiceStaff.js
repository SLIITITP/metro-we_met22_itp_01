import "../App.css";
//import ComplaintStaff from "../components/CustomerService/ComplaintStaff/Content/CreateComplaint";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayComplaintRequest from "../components/CustomerService/ComplaintStaff/Content/DisplayComplaintPage";
import DisplayTransportPage from "../components/CustomerService/TransportStaff/Content/DisplayTransportPage";
import MainNavigationStaff from "../components/MainNavigationStaff";

export default function CustServStaff() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/customerServiceStaff/*"
          element={<MainNavigationStaff />}
        />
      </Routes>

      <Routes>
        <Route
          path="/customerServiceStaff/complaintStaff"
          element={<DisplayComplaintRequest />}
        />
      </Routes>

      <Routes>
        <Route
          path="/customerServiceStaff/transportStaff"
          element={<DisplayTransportPage />}
        />
      </Routes>
    </div>
  );
}
