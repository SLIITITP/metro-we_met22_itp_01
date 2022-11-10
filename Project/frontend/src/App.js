import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustServ from "./Exports/CustomerService";
import LoginPage from "./components/Login/Login";
import Staff from "./Exports/Staff";
import ParkingManagement from "./Exports/ParkingManagement";
import Admin from "./Exports/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route> //add as star after
        //login path after bookings page is connected
      </Routes>
      <Routes>
        <Route path="/*" element={<CustServ />}></Route>
      </Routes>
      <Routes>
        <Route path="/*" element={<Staff />}></Route>
      </Routes>
      <Routes>
        <Route path="/*" element={<Admin />}></Route>
      </Routes>
      {/* <Routes>
        <Route path="/*" element={<ParkingManagement />}></Route>
      </Routes> */}
    </Router>
  );
}
export default App;
