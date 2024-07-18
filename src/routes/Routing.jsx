import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import ControlPanel from '../Components/ControlPanel'
// import PageNotFound from './Components/dashboard/PageNotFound';
import PageNotFound from '../Pages/Fixed/PageNotFound';



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