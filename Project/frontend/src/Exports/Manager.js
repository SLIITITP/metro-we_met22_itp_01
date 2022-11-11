import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavigationManager from "../components/MainNavigationManager";

//Staff Manager Interface - Zainab
import SideNavigationProfile from "../components/StaffManagement/Profile/Component/SideNavigationProfile";

import SideNavigationAttendance from "../components/StaffManagement/Attendance/Component/SideNavigationAttendance";
import GetAttendanceManager from "../components/StaffManagement/Attendance/Content/GetAttendanceManager";

import SideNavigationLeave from "../components/StaffManagement/Leave/Component/SideNavigationLeave";
import CreateLeaveManager from "../components/StaffManagement/Leave/Content/CreateLeaveManager";
import GetLeaveRequestsManager from "../components/StaffManagement/Leave/Content/GetLeaveRequestsmanager";
import ManagerLeaveDetails from "../components/StaffManagement/Leave/Content/ManagerLeaveDetails";
import EditLeaveManager from "../components/StaffManagement/Leave/Content/EditLeaveManager";

import SideNavigationInvoice from "../components/StaffManagement/Invoice/Component/SideNavigationInvoice";
import GetInvoiceManager from "../components/StaffManagement/Invoice/Content/GetInvoiceManager";
import ManagerInvoiceDetails from "../components/StaffManagement/Invoice/Content/ManagerInvoiceDetails";

import SideNavigationEmployee from "../components/StaffManagement/Employee/Component/SideNavigationEmployee";
import CreateEmployee from "../components/StaffManagement/Employee/Content/CreateEmployee";
import GetEmployees from "../components/StaffManagement/Employee/Content/GetEmployees";
import EmployeeDetails from "../components/StaffManagement/Employee/Content/EmployeeDetails";
import EditEmployee from "../components/StaffManagement/Employee/Content/EditEmployee";

import SideNavigationManageLeaves from "../components/StaffManagement/ManageLeaves/Component/SideNavigationManageLeaves";
import GetLeavesManager from "../components/StaffManagement/ManageLeaves/Content/GetLeavesManager";
import LeaveDetailsManager from "../components/StaffManagement/ManageLeaves/Content/LeaveDetailsManager";

import SideNavigationReports from "../components/StaffManagement/Reports/Component/SideNavigationReports";

//Inventory Manager Interface -  Rashida
import { SideNavigationChefProfile } from "../components/KitchenManagement/Profile/Component/SideNavigationChefProfile";
import { SideNavigationChefRequests } from "../components/KitchenManagement/ChefRequests/Component/SideNavigationChefRequests";
import { SideNavigationIngredientsLog } from "../components/KitchenManagement/ChefIngredientsLog/Component/SideNavigationIngredientsLog";
import CreateChefRequest from "../components/KitchenManagement/ChefRequests/Content/createChefRequest";
import FetchChefRequests from "../components/KitchenManagement/ChefRequests/Content/fetchChefRequests";
import IngredientFetchChefRequests from "../components/KitchenManagement/ChefIngredientsLog/Content/fetchChefIngredientRequests";
import ChefRequestDetails from "../components/KitchenManagement/ChefRequests/Content/chefRequestDetails";
import EditChefRequest from "../components/KitchenManagement/ChefRequests/Content/editChefRequest";
import HomeScreen from "../components/BookingManagement/CloseBookings/Screens/HomeScreen";
import BookingScreen from "../components/BookingManagement/CloseBookings/Screens/BookingScreen";

export default function Manager() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Manager/*" element={<MainNavigationManager />} />
      </Routes>

      <Routes>
        <Route
          path="/Manager"
          element={
            <>
              <SideNavigationProfile />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Manager/attendance"
          element={
            <>
              <GetAttendanceManager />
              <SideNavigationAttendance />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Manager/leave"
          element={
            <>
              <GetLeaveRequestsManager />
              <SideNavigationLeave />
            </>
          }
        ></Route>
        <Route
          path="/Manager/leave/createLeave"
          element={
            <>
              <CreateLeaveManager />
              <SideNavigationLeave />
            </>
          }
        ></Route>
        <Route
          path="/Manager/leave/getLeave/:id"
          element={
            <>
              <ManagerLeaveDetails />
              <SideNavigationLeave />
            </>
          }
        ></Route>
        <Route
          path="/Manager/leave/editLeave/:id"
          element={
            <>
              <EditLeaveManager />
              <SideNavigationLeave />
            </>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/Manager/invoice"
          element={
            <>
              <GetInvoiceManager />
              <SideNavigationInvoice />
            </>
          }
        ></Route>
        <Route
          path="/Manager/invoice/getInvoice/:id"
          element={
            <>
              <ManagerInvoiceDetails />
              <SideNavigationInvoice />
            </>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/Manager/employees"
          element={
            <>
              <GetEmployees />
              <SideNavigationEmployee />
            </>
          }
        ></Route>
        <Route
          path="/Manager/employees/createEmployee"
          element={
            <>
              <CreateEmployee />
              <SideNavigationEmployee />
            </>
          }
        ></Route>
        <Route
          path="/Manager/employees/getEmployee/:id"
          element={
            <>
              <EmployeeDetails />
              <SideNavigationEmployee />
            </>
          }
        ></Route>
        <Route
          path="/Manager/employees/editEmployee/:id"
          element={
            <>
              <EditEmployee />
              <SideNavigationEmployee />
            </>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/Manager/manageLeaves"
          element={
            <>
              <GetLeavesManager />
              <SideNavigationManageLeaves />
            </>
          }
        ></Route>
        <Route
          path="/Manager/manageLeaves/getLeave/:id"
          element={
            <>
              <LeaveDetailsManager />
              <SideNavigationManageLeaves />
            </>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/Manager/reports"
          element={
            <>
              <SideNavigationReports />
            </>
          }
        />
      </Routes>
    </div>
  );
}
