import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'
import ControlPanel from '../Pages/ControlPanel'
// import PageNotFound from './Components/dashboard/PageNotFound';
// import PageNotFound from '../Pages/PageNotFound';
import PageNotFound from '../Pages/Error/PageNotFound'



function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/control-panel" element={<ControlPanel />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Routing