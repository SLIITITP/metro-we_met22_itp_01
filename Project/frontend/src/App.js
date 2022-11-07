import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustServ from "./Exports/CustomerService";
import LoginPage from "./components/Login/Login";
import CustServStaff from "./Exports/CustomerServiceStaff";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/*" element={<CustServ />}></Route>
      </Routes>
      <Routes>
        <Route path="/*" element={<CustServStaff />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
