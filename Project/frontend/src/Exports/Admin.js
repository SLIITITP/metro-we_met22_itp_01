import "../App.css";
import MainNavigationAdmin from "../components/MainNavigationAdmin";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function CustServ() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/*" element={<MainNavigationAdmin />} />
      </Routes>
    </div>
  );
}
