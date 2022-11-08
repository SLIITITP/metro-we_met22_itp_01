import "../App.css";
//import ComplaintStaff from "../components/CustomerService/ComplaintStaff/Content/CreateComplaint";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayComplaintRequest from "../components/CustomerService/ComplaintStaff/Content/DisplayComplaintPage";
import DisplayTransportPage from "../components/CustomerService/TransportStaff/Content/DisplayTransportPage";
import MainNavigationStaff from "../components/MainNavigationStaff";

export default function Staff() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/Staff/*"
          element={<MainNavigationStaff />}
        />
      </Routes>

      <Routes>
        <Route
          path="/Staff/complaintStaff"
          element={<DisplayComplaintRequest />}
        />
      </Routes>

      <Routes>
        <Route
          path="/Staff/transportStaff"
          element={<DisplayTransportPage />}
        />
      </Routes>
    </div>
  );
}
