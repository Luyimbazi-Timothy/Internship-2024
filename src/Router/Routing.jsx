// src/Router/Routing.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';
import ControlPanel from '../Pages/ControlPanel';
import PageNotFound from '../Pages/Error/PageNotFound';
import DetailPage from '../Pages/AppraisalActivity/ActivityTableData/DetailPage';
import Login from '../Pages/Auth/Login';

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
