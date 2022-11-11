import "../App.css";
//import ComplaintStaff from "../components/CustomerService/ComplaintStaff/Content/CreateComplaint";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayComplaintRequest from "../components/CustomerService/ComplaintStaff/Content/DisplayComplaintPage";
import DisplayTransportPage from "../components/CustomerService/TransportStaff/Content/DisplayTransportPage";
import MainNavigationStaff from "../components/MainNavigationStaff";

//Employee Interface - Zainab

import SideNavigationProfileEmployee from "../components/StaffManagementEmployee/Profile/Component/SideNavigationProfileEmployee";
import ProfileDetails from "../components/StaffManagementEmployee/Profile/Content/ProfileDetails";

import SideNavigationAttendanceEmployee from "../components/StaffManagementEmployee/Attendance/Component/SideNavigationAttendanceEmployee";
import GetAttendance from "../components/StaffManagementEmployee/Attendance/Content/GetAttendance";

import SideNavigationLeaveEmployee from "../components/StaffManagementEmployee/Leave/Component/SideNavigationLeaveEmployee";
import CreateLeave from "../components/StaffManagementEmployee/Leave/Content/CreateLeave";
import GetLeaves from "../components/StaffManagementEmployee/Leave/Content/GetLeaves";
import LeaveDetails from "../components/StaffManagementEmployee/Leave/Content/LeaveDetails";
import EditLeave from "../components/StaffManagementEmployee/Leave/Content/EditLeave";

import SideNavigationInvoiceEmployee from "../components/StaffManagementEmployee/Invoice/Component/SideNavigationInvoiceEmployee";
import GetInvoice from "../components/StaffManagementEmployee/Invoice/Content/GetInvoice";
import InvoiceDetails from "../components/StaffManagementEmployee/Invoice/Content/InvoiceDetails";

//Receptionist Interface Nuha
import { SideNavigationCloseBookings } from "../components/BookingManagement/CloseBookings/Components/SideNavigationCloseBookings";
import { SideNavigationViewBookings } from "../components/BookingManagement/ViewBookings/Components/SideNavigationViewBookings";
import { SideNavigationViewUsers } from "../components/BookingManagement/ViewUsers/Components/SideNavigationViewUsers";
import HomeScreen from "../components/BookingManagement/CloseBookings/Screens/HomeScreen";
import BookingScreen from "../components/BookingManagement/CloseBookings/Screens/BookingScreen";
import ViewBookings from "../components/BookingManagement/ViewBookings/Screens/ViewBookings";
import ViewUsers from "../components/BookingManagement/ViewUsers/Screens/ViewUsers";

//chef interface Rashida
import { SideNavigationChefProfile } from "../components/KitchenManagement/Profile/Component/SideNavigationChefProfile";
import { SideNavigationChefRequests } from "../components/KitchenManagement/ChefRequests/Component/SideNavigationChefRequests";
import { SideNavigationIngredientsLog } from "../components/KitchenManagement/ChefIngredientsLog/Component/SideNavigationIngredientsLog";
import CreateChefRequest from "../components/KitchenManagement/ChefRequests/Content/createChefRequest";
import FetchChefRequests from "../components/KitchenManagement/ChefRequests/Content/fetchChefRequests";
import IngredientFetchChefRequests from "../components/KitchenManagement/ChefIngredientsLog/Content/fetchChefIngredientRequests";
import ChefRequestDetails from "../components/KitchenManagement/ChefRequests/Content/chefRequestDetails";
import EditChefRequest from "../components/KitchenManagement/ChefRequests/Content/editChefRequest";

// parking
import Dashboard from "../components/ParkingManagement/pages/dashboard";
import Initialize from "../components/ParkingManagement/pages/initialize";
import Report from "../components/ParkingManagement/pages/report";
import Header from "../components/ParkingManagement/header/header";
import SideNavigationParkAdmin from "../components/ParkingManagement/header/SideNavigationParkAdmin";

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
              <FetchChefRequests />

              <SideNavigationChefRequests />
            </>
          }
        />
        <Route
          path="/Staff/kitchenStaff/chefRequests/requestLog/editRequest:id"
          element={
            <>
              <EditChefRequest />

              <SideNavigationChefRequests />
            </>
          }
        />

        <Route
          path="/Staff/kitchenStaff/chefRequests/requestLog"
          element={
            <>
              {/* <FetchChefRequests /> */}
              <CreateChefRequest />
              <SideNavigationChefRequests />
            </>
          }
        />
        <Route
          path="/Staff/kitchenStaff/chefRequests/requestLog/getRequest:id"
          element={
            <>
              <ChefRequestDetails />
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
              <IngredientFetchChefRequests />
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
              <ProfileDetails />
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
              <GetInvoice />
              <SideNavigationInvoiceEmployee />
            </>
          }
        />
        <Route
          path="/Staff/staffManagementEmployee/invoice/getInvoice/:id"
          element={
            <>
              <InvoiceDetails />
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
              <HomeScreen />
              <SideNavigationCloseBookings />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/Staff/viewBookings"
          element={
            <>
              <ViewBookings />
              <SideNavigationViewBookings />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/Staff/viewCustomers"
          element={
            <>
              <ViewUsers />
              <SideNavigationViewUsers />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/Staff/book/:roomid/:fromdate/:todate"
          element={
            <>
              <BookingScreen />
              <SideNavigationViewUsers />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/Staff/park"
          element={
            <>
              <Dashboard />
            </>
          }
        />
      </Routes>
    </div>
  );
}
