import "../App.css";
//import ComplaintStaff from "../components/CustomerService/ComplaintStaff/Content/CreateComplaint";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayComplaintRequest from "../components/CustomerService/ComplaintStaff/Content/DisplayComplaintPage";
import DisplayTransportPage from "../components/CustomerService/TransportStaff/Content/DisplayTransportPage";
import MainNavigationStaff from "../components/MainNavigationStaff";
import CreateRequest from "../components/KitchenManagement/ChefRequests/Content/createChefRequest";

//Employee Interface - Zainab

import SideNavigationProfileEmployee from "../components/StaffManagementEmployee/Profile/Component/SideNavigationProfileEmployee";

import SideNavigationAttendanceEmployee from "../components/StaffManagementEmployee/Attendance/Component/SideNavigationAttendanceEmployee";
import GetAttendance from "../components/StaffManagementEmployee/Attendance/Content/GetAttendance";

import SideNavigationLeaveEmployee from "../components/StaffManagementEmployee/Leave/Component/SideNavigationLeaveEmployee";
import CreateLeave from "../components/StaffManagementEmployee/Leave/Content/CreateLeave";
import GetLeaves from "../components/StaffManagementEmployee/Leave/Content/GetLeaves";
import LeaveDetails from "../components/StaffManagementEmployee/Leave/Content/LeaveDetails";
import EditLeave from "../components/StaffManagementEmployee/Leave/Content/EditLeave";

import SideNavigationInvoiceEmployee from "../components/StaffManagementEmployee/Invoice/Component/SideNavigationInvoiceEmployee";
import { SideNavigationCloseBookings } from "../components/BookingManagement/CloseBookings/Components/SideNavigationCloseBookings";
import { SideNavigationReport } from "../components/BookingManagement/Report/Components/SideNavigationReport";
import { SideNavigationViewBookings } from "../components/BookingManagement/ViewBookings/Components/SideNavigationViewBookings";
import { SideNavigationViewUsers } from "../components/BookingManagement/ViewUsers/Components/SideNavigationViewUsers";


//chef interface Rashida
import { SideNavigationChefProfile } from "../components/KitchenManagement/Profile/Component/SideNavigationChefProfile";
import { SideNavigationChefRequests } from "../components/KitchenManagement/ChefRequests/Component/SideNavigationChefRequests";
import { SideNavigationIngredientsLog } from "../components/KitchenManagement/ChefIngredientsLog/Component/SideNavigationIngredientsLog";
import CreateChefRequest from "../components/KitchenManagement/ChefRequests/Content/createChefRequest";
import FetchChefRequests from "../components/KitchenManagement/ChefRequests/Content/fetchChefRequests";
import IngredientFetchChefRequests from "../components/KitchenManagement/ChefIngredientsLog/Content/fetchChefIngredientRequests";
import ChefRequestDetails from "../components/KitchenManagement/ChefRequests/Content/chefRequestDetails";
import EditChefRequest from "../components/KitchenManagement/ChefRequests/Content/editChefRequest";



export default function Staff() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Staff/*" element={<MainNavigationStaff />} />
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

      {/* Rashida's */}
      <Routes>
          <Route
            path="/Staff/kitchenStaff"
            element={
              <>
                <SideNavigationChefProfile />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/Staff/kitchenStaff/chefRequests"
            element={
              <>
                
                <FetchChefRequests/>

                <SideNavigationChefRequests />
              </>
            }
          />
          <Route
            path="/Staff/kitchenStaff/chefRequests/requestLog/editRequest:id"
            element={
              <>
                <EditChefRequest/>

                <SideNavigationChefRequests />
              </>
            }
          />

          <Route
            path="/Staff/kitchenStaff/chefRequests/requestLog"
            element={
              <>
                {/* <FetchChefRequests /> */}
                <CreateChefRequest/>
                <SideNavigationChefRequests />
              </>
            }
          />
          <Route
            path="/Staff/kitchenStaff/chefRequests/requestLog/getRequest:id"
            element={
              <>
                <ChefRequestDetails/>
                <SideNavigationChefRequests />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/Staff/kitchenStaff/ingredientsLog"
            element={
              <>
                <IngredientFetchChefRequests/>
                <SideNavigationIngredientsLog />
              </>
            }
          />
        </Routes>

      {/* Zainab's */}
      <Routes>
        <Route
          path="/Staff/staffManagementEmployee"
          element={
            <>
              <SideNavigationProfileEmployee />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Staff/staffManagementEmployee/attendance"
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
          path="/Staff/staffManagementEmployee/leave"
          element={
            <>
              <GetLeaves />
              <SideNavigationLeaveEmployee />
            </>
          }
        ></Route>
        <Route
          path="/Staff/staffManagementEmployee/leave/createLeave"
          element={
            <>
              <CreateLeave />
              <SideNavigationLeaveEmployee />
            </>
          }
        ></Route>
        <Route
          path="/Staff/staffManagementEmployee/leave/getLeave/:id"
          element={
            <>
              <LeaveDetails />
              <SideNavigationLeaveEmployee />
            </>
          }
        ></Route>
        <Route
          path="/Staff/staffManagementEmployee/leave/editLeave/:id"
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
          path="/Staff/staffManagementEmployee/invoice"
          element={
            <>
              <SideNavigationInvoiceEmployee />
            </>
          }
        />
      </Routes>

      {/* Nuha's Routes */}
      <Routes>
        <Route
          path="/Staff"
          element={
            <>
              <SideNavigationCloseBookings />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/Staff/report"
          element={
            <>
              <SideNavigationReport />
            </>
          }
        />
      </Routes><Routes>
        <Route
          path="/Staff/viewBookings"
          element={
            <>
              <SideNavigationViewBookings />
            </>
          }
        />
      </Routes><Routes>
        <Route
          path="/Staff/viewCustomers"
          element={
            <>
              <SideNavigationViewUsers />
            </>
          }
        />
      </Routes>
      

    </div>
  );
}
