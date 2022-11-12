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
import DisplayAttendance from "../components/StaffManagementAdmin/attendance/displayAttendance";
import DisplayEmployees from "../components/StaffManagementAdmin/employees/displayEmployees";
import DisplayInvoice from "../components/StaffManagementAdmin/invoice/displayInvoice";
import DisplayLeave from "../components/StaffManagementAdmin/leave/displayLeave";


//Inventory

import { SideNavIngredientLog } from "../components/InventoryManagementAdmin/ingredientsLog/sideNavIngredients";
import { SideNavAmenityLog } from "../components/InventoryManagementAdmin/amenityLog/sideNavAmenity";
import { SideNavAssetsLog } from "../components/InventoryManagementAdmin/assetsLog/sideNavAssets";
import DisplayIngredients from "../components/InventoryManagementAdmin/ingredientsLog/displayIngredients";
import DisplayAssets from "../components/InventoryManagementAdmin/assetsLog/displayAssets";
import DisplayToiletries from "../components/InventoryManagementAdmin/amenityLog/displayAmenities";

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
              <DisplayAttendance />
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
              <DisplayEmployees />
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
              <DisplayInvoice />
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
              <DisplayLeave />
              <SideNavLeave />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/admin/inventory"
          element={
            <>
              <SideNavIngredientLog/>
              <DisplayIngredients/>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/admin/inventory/amenityLog"
          element={
            <>
              <SideNavAmenityLog/>
              <DisplayToiletries/>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/admin/inventory/assetsLog"
          element={
            <>
              <SideNavAssetsLog/>
              <DisplayAssets/>
            </>
          }
        />
      </Routes>
    </div>
  );
}
