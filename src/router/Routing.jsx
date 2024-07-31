// src/Router/Routing.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import ControlPanel from "../pages/ControlPanel";
import PageNotFound from "../pages/error/PageNotFound";
import DetailPage from "../pages/AppraisalActivity/activityTableData/DetailPage";
import Login from "../pages/auth/Login";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/control-panel" element={<ControlPanel />} />
        <Route path="/appraisal-details" element={<DetailPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
