import "./App.css";
import { MainNavigation } from "./components/Navigation/MainNavigation";
import { SideNavigationFoodAndBeverage } from "./components/CustomerService/FoodAndBeverage/Component/SideNavigationFoodAndBeverage";
import FoodAndBeverageCustomer from "./components/CustomerService/FoodAndBeverage/Content/CreateFoodAndBeverageCustomer";
import { SideNavigationTrainer } from "./components/CustomerService/FoodAndBeverage/Component/SideNavigationTrainer";
import TrainerCustomer from "./components/CustomerService/FoodAndBeverage/Content/TrainerCustomer";
import ShowFoodAndBeverage from "./components/CustomerService/FoodAndBeverage/Content/ShowFoodAndBeverage";
import TransportCustomer from "./components/CustomerService/Transport/Content/CreateTransportRequest";
import { SideNavigationTransport } from "./components/CustomerService/Transport/Component/SideNavigationTransport";
import ShowTransportRequest from "./components/CustomerService/Transport/Content/showTransportRequest";
import ComplaintCustomer from "./components/CustomerService/Complaint/Content/CreateComplaint";
import { SideNavigationComplaint } from "./components/CustomerService/Complaint/Component/SideNavigationComplaint";
import ShowComplaintRequest from "./components/CustomerService/Complaint/Content/showComplaint";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
            path="/customerService/trainer"
            element={
              <>
                <TrainerCustomer />
                <SideNavigationTrainer />
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
      </div>
    </Router>
  );
}
//This is how we export in react
export default App;
