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

import { SideNavigationIngredients } from "../components/InventoryManagement/IngredientsLog/Component/sideNavigationIngredients";
import CreateIngredients from "../components/InventoryManagement/IngredientsLog/Content/createIngredients";
import { SideNavigationToiletries } from "../components/InventoryManagement/ToiletriesLog/Component/SideNavigationToiletries";
import { SideNavigationAssets } from "../components/InventoryManagement/AssetsLog/Component/SideNavigationAssets";
import { SideNavigationAttendRequest } from "../components/InventoryManagement/AttendRequests/Component/SideNavigationAttendRequests";

//import SideNavigationReports from "../components/StaffManagement/Reports/Component/SideNavigationReports";
import { SideNavigationRequestForSupplies } from "../components/InventoryManagement/RequestForSupplies/Component/SideNavigationRequestForSupplies";
import FetchIngredients from "../components/InventoryManagement/IngredientsLog/Content/fetchIngredients";
import EditIngredients from "../components/InventoryManagement/IngredientsLog/Content/EditIngredients";
import IngredientsDetails from "../components/InventoryManagement/IngredientsLog/Content/IngredientsDetails";
import CreateToiletry from "../components/InventoryManagement/ToiletriesLog/Content/createToiletry";
import FetchToiletries from "../components/InventoryManagement/ToiletriesLog/Content/getToiletries";
import ToiletryDetails from "../components/InventoryManagement/ToiletriesLog/Content/ToiletriesDetails";
import CreateAsset from "../components/InventoryManagement/AssetsLog/Content/createAsset";
import FetchAssets from "../components/InventoryManagement/AssetsLog/Content/fetchAssets";
import EditToiletry from "../components/InventoryManagement/ToiletriesLog/Content/editToiletry";
import AssetDetails from "../components/InventoryManagement/AssetsLog/Content/assetDetails";
import EditAsset from "../components/InventoryManagement/AssetsLog/Content/editAssets";
import CreateRequest from "../components/InventoryManagement/IngredientsLog/Content/createRequest";
import FetchRequests from "../components/InventoryManagement/IngredientsLog/Content/fetchRequests";
import IngredientsRequestDetails from "../components/InventoryManagement/IngredientsLog/Content/RequestDetails";
import CreateNewRequest from "../components/InventoryManagement/IngredientsLog/Content/addNewRequest";
import CreateAmenityRequest from "../components/InventoryManagement/ToiletriesLog/Content/createAmenityRequest";
import CreateNewAmenityRequest from "../components/InventoryManagement/ToiletriesLog/Content/createNewAmenityRequest";
import FetchAmenityRequests from "../components/InventoryManagement/ToiletriesLog/Content/fetchAmenityRequests";
import EditRequest from "../components/InventoryManagement/IngredientsLog/Content/editRequests";
import EditAmenityRequest from "../components/InventoryManagement/ToiletriesLog/Content/editAmenityRequest";
import FetchRoomNecessityRequests from "../components/InventoryManagement/AttendRequests/Content/fetchRequests";

import ChefRequestDetails from "../components/KitchenManagement/ChefRequests/Content/chefRequestDetails";

import { SideNavigationAttendChefRequests } from "../components/InventoryManagement/AttendChefRequests/Component/SideNavigationAttendChefRequests";
import FetchChefIngredientRequests from "../components/InventoryManagement/AttendChefRequests/Content/fetchChefIngredientsRequests";

// Supplier Management
import OrderDetails from "../components/Supplier/Order/content/OrderDetails";
import { SideNavigationOrder } from "../components/Supplier/Order/component/SideNavigationOrder";
import ShowallOrder from "../components/Supplier/Order/content/ShowallOrder";
import AddOrder from "../components/Supplier/Order/content/AddOrder";
import AddReview from "../components/Supplier/Review/content/AddReview";
import ShowallReview from "../components/Supplier/Review/content/ShowallReview";
import EditSupplier from "../components/Supplier/Supplier/content/EditSupplier";
import ShowallSupplier from "../components/Supplier/Supplier/content/ShowallSupplier";
import SuggestSupplier from "../components/Supplier/Supplier/content/SuggestSupplier";
import AddSupplier from "../components/Supplier/Supplier/content/AddSupplier";
import { SideNavigationSupplier } from "../components/Supplier/Supplier/component/SideNavigationSupplier";
import { SideNavigationReview } from "../components/Supplier/Review/component/SideNavigationReview";

// parking
import Dashboard from "../components/ParkingManagement/pages/dashboard";
import Initialize from "../components/ParkingManagement/pages/initialize";
import Report from "../components/ParkingManagement/pages/report";
import Header from "../components/ParkingManagement/header/header";
import SideNavigationParkAdmin from "../components/ParkingManagement/header/SideNavigationParkAdmin";
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

      <Routes>
        <Route
          path="/Manager/inventoryManagement"
          element={
            <>
              <FetchIngredients />
              <SideNavigationIngredients />
            </>
          }
        ></Route>

        <Route
          path="/Manager/inventoryManagement/attendRequests"
          element={
            <>
              <FetchRoomNecessityRequests />
              <SideNavigationAttendRequest />
            </>
          }
        ></Route>
        <Route
          path="/Manager/inventoryManagement/ingredientsLog/createIngredient"
          element={
            <>
              <CreateIngredients />
              <SideNavigationIngredients />
            </>
          }
        ></Route>
        <Route
          path="/Manager/inventoryManagement/ingredientsLog/getIngredient/:id"
          element={
            <>
              <IngredientsDetails />
            </>
          }
        ></Route>
        <Route
          path="/Manager/inventoryManagement/ingredientsLog/createRequest/:id"
          element={
            <>
              <CreateRequest />
            </>
          }
        ></Route>
        <Route
          path="/Manager/inventoryManagement/requestLog/createNewRequest"
          element={
            <>
              <CreateNewRequest />
            </>
          }
        ></Route>
        <Route
          path="/Manager/inventoryManagement/requestLog/editRequest/:id"
          element={
            <>
              <EditRequest />
            </>
          }
        ></Route>
        <Route
          path="/Manager/inventoryManagement/requestLog/getRequest/:id"
          element={
            <>
              <IngredientsRequestDetails />
              <SideNavigationRequestForSupplies />
            </>
          }
        ></Route>
        <Route
          path="/Manager/inventoryManagement/requestLog"
          element={
            <>
              <FetchRequests />
              <SideNavigationRequestForSupplies />
            </>
          }
        ></Route>
        <Route
          path="/Manager/inventoryManagement/ingredientsLog/editIngredient/:id"
          element={
            <>
              <EditIngredients />
            </>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/Manager/inventoryManagement/toiletriesLog"
          element={
            <>
              <FetchToiletries />
              <SideNavigationToiletries />
            </>
          }
        ></Route>
        <Route
          path="/Manager/inventoryManagement/toiletriesLog/createRequest/:id"
          element={
            <>
              <CreateAmenityRequest />
            </>
          }
        ></Route>

        <Route
          path="/Manager/inventoryManagement/amenityRequestLog/createNewAmenityRequest"
          element={
            <>
              <CreateNewAmenityRequest />
            </>
          }
        ></Route>
        <Route
          path="/Manager/inventoryManagement/amenityRequestLog/editRequest/:id"
          element={
            <>
              <EditAmenityRequest />
            </>
          }
        ></Route>
        <Route
          path="/Manager/inventoryManagement/amenityRequestLog"
          element={
            <>
              <FetchAmenityRequests />
              <SideNavigationRequestForSupplies />
            </>
          }
        ></Route>

        <Route
          path="/Manager/inventoryManagement/toiletriesLog/createToiletry"
          element={
            <>
              <CreateToiletry />
              <SideNavigationToiletries />
            </>
          }
        />
        <Route
          path="/Manager/inventoryManagement/toiletriesLog/getToiletry/:id"
          element={
            <>
              <ToiletryDetails />
            </>
          }
        ></Route>
        <Route
          path="/Manager/inventoryManagement/toiletriesLog/editToiletry/:id"
          element={
            <>
              <EditToiletry />
            </>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/Manager/inventoryManagement/assetsLog"
          element={
            <>
              <FetchAssets />
              <SideNavigationAssets />
            </>
          }
        ></Route>
        <Route
          path="/Manager/inventoryManagement/assetsLog/createAsset"
          element={
            <>
              <CreateAsset />
              <SideNavigationAssets />
            </>
          }
        ></Route>
        <Route
          path="/Manager/inventoryManagement/assetsLog/getAsset/:id"
          element={
            <>
              <AssetDetails />
              <SideNavigationAssets />
            </>
          }
        ></Route>
        <Route
          path="/Manager/inventoryManagement/assetsLog/editAssets/:id"
          element={
            <>
              <EditAsset />
              <SideNavigationAssets />
            </>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/Manager/inventoryManagement/attendRequests"
          element={
            <>
              <SideNavigationAttendRequest />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Manager/inventoryManagement/chefRequestLog"
          element={
            <>
              <FetchChefIngredientRequests />
              <SideNavigationAttendChefRequests />
            </>
          }
        />
        <Route
          path="/Manager/inventoryManagement/chefRequestLog/getRequest/:id"
          element={
            <>
              <ChefRequestDetails />
              <SideNavigationAttendChefRequests />
            </>
          }
        />
      </Routes>
      <Routes>
        {/* <Route
            path="/Manager/inventoryManagement/reports"
            element={
              <>
                <SideNavigationReports />
              </>
            }
          /> */}
      </Routes>

      {/* Supplier */}
      <Routes>
        <Route
          path="/Manager/Supplier"
          element={
            <>
              <SideNavigationSupplier />
              <ShowallSupplier />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Manager/Supplier/addsupplier"
          element={
            <>
              <AddSupplier />
              <SideNavigationSupplier />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Manager/Supplier/avgstar/:id"
          element={
            <>
              <SideNavigationSupplier />
              <SuggestSupplier />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Manager/Review"
          element={
            <>
              <SideNavigationReview />
              <ShowallReview />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Manager/Supplier/Review/:id"
          element={
            <>
              <SideNavigationReview />
              <AddReview />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Manager/Order/:id"
          element={
            <>
              <AddOrder />
              <SideNavigationOrder />
              <ShowallOrder />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Manager/Order"
          element={
            <>
              <AddOrder />
              <SideNavigationOrder />
              <ShowallOrder />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/Manager/order/requestDetails/:id"
          element={
            <>
              <SideNavigationReview />
              <OrderDetails />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/Manager/supplier/editSupplier/:id"
          element={
            <>
              <SideNavigationSupplier />
              <EditSupplier />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/park"
          element={
            <>
              <Header />
              <Dashboard />
            </>
          }
        />
      </Routes>
    </div>
  );
}
