import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppClient from "./client/App";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        {/* Route cho client */}
        <Route path="/*" element={<AppClient />} />
        
        {/* Route cho admin */}
      </Routes>
    </Router>
  );
};

export default RouterComponent;
