import EditBar from "../components/ParkingManagement/components/userComponent/EditBar";
import Notification from "../components/ParkingManagement/components/userComponent/Notification";
import ManageBar from "../components/ParkingManagement/components/userComponent/ManageBar";
import StatusBar from "../components/ParkingManagement/components/userComponent/StatusBar";
import ParkingLot from "../components/ParkingManagement/components/userComponent/ParkingLot";
import { MainNavigation } from "../components/ParkingManagement/Navigation/MainNavigation";
import "../App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function parking() {
  return (
    <Router>
      <div className="App">
        <MainNavigation />
        <Routes>
          <Route
            path="/park"
            element={
              <div className="App">
                <Notification />
                <StatusBar />
                <ParkingLot />
                <ManageBar />
              </div>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/park/admin/edit"
            element={
              <div className="App">
                <Notification />
                <StatusBar />
                <EditBar />
                <ParkingLot />
                <ManageBar />
              </div>
            }
          />
        </Routes>

        <Routes>
          <Route path="/park/admin" element={<></>} />
        </Routes>

        <Routes>
          <Route path="/park/admin" element={<></>} />
        </Routes>
      </div>
    </Router>
  );
}
