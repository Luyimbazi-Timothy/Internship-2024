// src/Router/Routing.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import ControlPanel from "../pages/controlPanel/ControlPanel";
import PageNotFound from "../pages/error/PageNotFound";
import Login from "../pages/auth/Login";
import DetailPage from "../pages/appraisalActivity/activityTableData/DetailPage";
import AddActivityForm from "../pages/appraisalActivity/addActivity/ActivityForm";
function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-new-activity" element={<AddActivityForm />} />
        <Route path="/control-panel" element={<ControlPanel />} />
        <Route path="/appraisal-details" element={<DetailPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
