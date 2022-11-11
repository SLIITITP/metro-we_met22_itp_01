import "../App.css";
import MainNavigationAdmin from "../components/MainNavigationAdmin";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComplaintReport from "../components/CustomerService/CustomerServiceAdmin/complaints/complaintReport";
import SideNavForCustServReport from "../components/CustomerService/CustomerServiceAdmin/complaints/SideNavForCustServReport";

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
    </div>
  );
}
