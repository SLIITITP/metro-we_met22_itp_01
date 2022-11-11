import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//import { GlobalContextWrapper } from "./components/ParkingManagement/components/context/index";
import store from "./store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
