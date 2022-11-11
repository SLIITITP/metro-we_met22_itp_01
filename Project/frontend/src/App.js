import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustServ from "./Exports/CustomerService";
import LoginPage from "./components/Login/Login";
import Staff from "./Exports/Staff";
import Manager from "./Exports/Manager";
import Admin from "./Exports/Admin";
import Customer from "./Exports/Customer";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Customer />}></Route> //add as star after
      </Routes>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route> //add as star after
      </Routes>
      <Routes>
        <Route path="/*" element={<CustServ />}></Route>
      </Routes>
      <Routes>
        <Route path="/*" element={<Staff />}></Route>
      </Routes>
      <Routes>
        <Route path="/*" element={<Manager />}></Route>
      </Routes>
      <Routes>
        <Route path="/*" element={<Admin />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
