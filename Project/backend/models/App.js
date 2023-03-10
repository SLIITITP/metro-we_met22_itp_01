import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Employee Interface
import MainNavigationEmployee from "./components/StaffManagementEmployee/Profile/Component/MainNavigationEmployee";

import SideNavigationProfileEmployee from "./components/StaffManagementEmployee/Profile/Component/SideNavigationProfileEmployee";

import SideNavigationAttendanceEmployee from "./components/StaffManagementEmployee/Attendance/Component/SideNavigationAttendanceEmployee";
import GetAttendance from "./components/StaffManagementEmployee/Attendance/Content/GetAttendance";

import SideNavigationLeaveEmployee from "./components/StaffManagementEmployee/Leave/Component/SideNavigationLeaveEmployee";
import CreateLeave from "./components/StaffManagementEmployee/Leave/Content/CreateLeave";
import GetLeaves from "./components/StaffManagementEmployee/Leave/Content/GetLeaves";
import LeaveDetails from "./components/StaffManagementEmployee/Leave/Content/LeaveDetails";
import EditLeave from "./components/StaffManagementEmployee/Leave/Content/EditLeave";

import SideNavigationInvoiceEmployee from "./components/StaffManagementEmployee/Invoice/Component/SideNavigationInvoiceEmployee";

//Manager Interface
import MainNavigation from "./components/StaffManagement/Profile/Component/MainNavigation";

import SideNavigationProfile from "./components/StaffManagement/Profile/Component/SideNavigationProfile";

import SideNavigationAttendance from "./components/StaffManagement/Attendance/Component/SideNavigationAttendance";
import GetAttendanceManager from "./components/StaffManagement/Attendance/Content/GetAttendanceManager";

import SideNavigationLeave from "./components/StaffManagement/Leave/Component/SideNavigationLeave";
import CreateLeaveManager from "./components/StaffManagement/Leave/Content/CreateLeaveManager";
import GetLeaveRequestsManager from "./components/StaffManagement/Leave/Content/GetLeaveRequestsmanager";
import ManagerLeaveDetails from "./components/StaffManagement/Leave/Content/ManagerLeaveDetails";
import EditLeaveManager from "./components/StaffManagement/Leave/Content/EditLeaveManager";

import SideNavigationInvoice from "./components/StaffManagement/Invoice/Component/SideNavigationInvoice";

import SideNavigationEmployee from "./components/StaffManagement/Employee/Component/SideNavigationEmployee";
import CreateEmployee from "./components/StaffManagement/Employee/Content/CreateEmployee";
import GetEmployees from "./components/StaffManagement/Employee/Content/GetEmployees";
import EmployeeDetails from "./components/StaffManagement/Employee/Content/EmployeeDetails";
import EditEmployee from "./components/StaffManagement/Employee/Content/EditEmployee";

import SideNavigationManageLeaves from "./components/StaffManagement/ManageLeaves/Component/SideNavigationManageLeaves";
import GetLeavesManager from "./components/StaffManagement/ManageLeaves/Content/GetLeavesManager";
import LeaveDetailsManager from "./components/StaffManagement/ManageLeaves/Content/LeaveDetailsManager";

import SideNavigationReports from "./components/StaffManagement/Reports/Component/SideNavigationReports";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Employee Interface */}

        <Routes>
          <Route
            path="/staffManagementEmployee/*"
            element={
              <>
                <MainNavigationEmployee />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/staffManagementEmployee"
            element={
              <>
                <SideNavigationProfileEmployee />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/staffManagementEmployee/attendance"
            element={
              <>
                <GetAttendance />
                <SideNavigationAttendanceEmployee />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/staffManagementEmployee/leave"
            element={
              <>
                <GetLeaves />
                <SideNavigationLeaveEmployee />
              </>
            }
          ></Route>
          <Route
            path="staffManagementEmployee/leave/createLeave"
            element={
              <>
                <CreateLeave />
                <SideNavigationLeaveEmployee />
              </>
            }
          ></Route>
          <Route
            path="staffManagementEmployee/leave/getLeave/:id"
            element={
              <>
                <LeaveDetails />
                <SideNavigationLeaveEmployee />
              </>
            }
          ></Route>
          <Route
            path="staffManagementEmployee/leave/editLeave/:id"
            element={
              <>
                <EditLeave />
                <SideNavigationLeaveEmployee />
              </>
            }
          ></Route>
        </Routes>

        <Routes>
          <Route
            path="/staffManagementEmployee/invoice"
            element={
              <>
                <SideNavigationInvoiceEmployee />
              </>
            }
          />
        </Routes>

        {/* Manager Interface */}

        <Routes>
          <Route
            path="/staffManagement/*"
            element={
              <>
                <MainNavigation />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/staffManagement"
            element={
              <>
                <SideNavigationProfile />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/staffManagement/attendance"
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
            path="/staffManagement/leave"
            element={
              <>
                <GetLeaveRequestsManager />
                <SideNavigationLeave />
              </>
            }
          ></Route>
          <Route
            path="staffManagement/leave/createLeave"
            element={
              <>
                <CreateLeaveManager />
                <SideNavigationLeave />
              </>
            }
          ></Route>
          <Route
            path="staffManagement/leave/getLeave/:id"
            element={
              <>
                <ManagerLeaveDetails />
                <SideNavigationLeave />
              </>
            }
          ></Route>
          <Route
            path="staffManagement/leave/editLeave/:id"
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
            path="/staffManagement/invoice"
            element={
              <>
                <SideNavigationInvoice />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="staffManagement/employees"
            element={
              <>
                <GetEmployees />
                <SideNavigationEmployee />
              </>
            }
          ></Route>
          <Route
            path="staffManagement/employees/createEmployee"
            element={
              <>
                <CreateEmployee />
                <SideNavigationEmployee />
              </>
            }
          ></Route>
          <Route
            path="staffManagement/employees/getEmployee/:id"
            element={
              <>
                <EmployeeDetails />
                <SideNavigationEmployee />
              </>
            }
          ></Route>
          <Route
            path="staffManagement/employees/editEmployee/:id"
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
            path="/staffManagement/manageLeaves"
            element={
              <>
                <GetLeavesManager />
                <SideNavigationManageLeaves />
              </>
            }
          ></Route>
          <Route
            path="staffManagement/manageLeaves/getLeave/:id"
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
            path="/staffManagement/reports"
            element={
              <>
                <SideNavigationReports />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

//This is how we export in react
export default App;
