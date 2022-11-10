import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalContextWrapper } from "./components/ParkingManagement/components/context/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
