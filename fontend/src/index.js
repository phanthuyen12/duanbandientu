import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'select2/dist/js/select2.min.js';
import RouterComponent from "./router"; // Nhập RouterComponent
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterComponent /> {/* Render RouterComponent để quản lý các route */}
  </React.StrictMode>
);

reportWebVitals();
