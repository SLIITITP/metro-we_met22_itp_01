import "../App.css";
import { MainNavigation } from "../components/CustomerService/FoodAndBeverage/Component/MainNavigation";
import { SideNavigationFoodAndBeverage } from "../components/CustomerService/FoodAndBeverage/Component/SideNavigationFoodAndBeverage";
import FoodAndBeverageCustomer from "../components/CustomerService/FoodAndBeverage/Content/CreateFoodAndBeverageCustomer";
import ShowFoodAndBeverage from "../components/CustomerService/FoodAndBeverage/Content/ShowFoodAndBeverage";
import TransportCustomer from "../components/CustomerService/Transport/Content/CreateTransportRequest";
import { SideNavigationTransport } from "../components/CustomerService/Transport/Component/SideNavigationTransport";
import ShowTransportRequest from "../components/CustomerService/Transport/Content/showTransportRequest";
import ComplaintCustomer from "../components/CustomerService/Complaint/Content/CreateComplaint";
import { SideNavigationComplaint } from "../components/CustomerService/Complaint/Component/SideNavigationComplaint";
import ShowComplaintRequest from "../components/CustomerService/Complaint/Content/showComplaint";
import AmenityCustomer from "../components/CustomerService/Amenity/Content/CreateAmenity";
import ShowAmenityRequest from "../components/CustomerService/Amenity/Content/showAmenity";
import { SideNavigationAmenity } from "../components/CustomerService/Amenity/Component/SideNavigationAmenity";
import { SideNavigationComplaintStaff } from "../components/CustomerService/ComplaintStaff/Component/SideNavigationComplaintStaff";
import DisplayComplaintRequest from "../components/CustomerService/ComplaintStaff/Content/DisplayComplaintPage";
import MainNavigationStaffComplaint from "../components/CustomerService/ComplaintStaff/Component/MainNavigationStaff";
import MainNavigationStaffTransport from "../components/CustomerService/TransportStaff/Component/MainNavigationStaff";
import DisplayTransportPage from "../components/CustomerService/TransportStaff/Content/DisplayTransportPage";
import { SideNavigationTransportStaff } from "../components/CustomerService/TransportStaff/Component/SideNavigationTransportStaff";
import LoginPage from "../components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function CustServ() {
  return (
    <Router>
      <div className="App">
        <MainNavigation />
        <Routes>
          <Route
            path="/customerService"
            element={
              <>
                <FoodAndBeverageCustomer />
                <ShowFoodAndBeverage />
                <SideNavigationFoodAndBeverage />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/customerService/transport"
            element={
              <>
                <TransportCustomer />
                <ShowTransportRequest />
                <SideNavigationTransport />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/customerService/complaint"
            element={
              <>
                <ComplaintCustomer />
                <ShowComplaintRequest />
                <SideNavigationComplaint />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/customerService/amenity"
            element={
              <>
                <AmenityCustomer />
                <ShowAmenityRequest />
                <SideNavigationAmenity />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/customerService/complaintStaff"
            element={
              <>
                <MainNavigationStaffComplaint />
                <DisplayComplaintRequest />
                {/* <SideNavigationComplaintStaff /> */}
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/customerService/transportStaff"
            element={
              <>
                <MainNavigationStaffTransport />
                <DisplayTransportPage />
                {/* <SideNavigationTransportStaff /> */}
                {/* <DisplayComplaintRequest />
                 */}
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/login"
            element={
              <>
                <LoginPage />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
