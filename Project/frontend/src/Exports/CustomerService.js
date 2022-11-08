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
import TransportAd from "../components/CustomerService/Transport/Content/TransportAdvertisement";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function CustServ() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/customerService/*"
          element={
            <>
              <MainNavigation />
            </>
          }
        />
      </Routes>

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
              {/* <TransportCustomer /> */}
              {/* <ShowTransportRequest /> */}
              <TransportAd />
              <SideNavigationTransport />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/customerService/transport/booknow/:w1"
          element={
            <>
              <TransportCustomer />
              <ShowTransportRequest />
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
    </div>
  );
}
