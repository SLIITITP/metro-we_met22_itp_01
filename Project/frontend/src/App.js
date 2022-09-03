import "./App.css";
import { MainNavigation } from "./components/CustomerService/Component/MainNavigation";
import { SideNavigationFoodAndBeverage } from "./components/CustomerService/Component/SideNavigationFoodAndBeverage";
import FoodAndBeverageCustomer from "./components/CustomerService/Content/CreateFoodAndBeverageCustomer";
import { SideNavigationTrainer } from "./components/CustomerService/Component/SideNavigationTrainer";
import TrainerCustomer from "./components/CustomerService/Content/TrainerCustomer";
import ShowStudents from "./components/CustomerService/Content/ShowFoodAndBeverage";
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
                <ShowStudents />
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
      </div>
    </Router>
  );
}
//This is how we export in react
export default App;
