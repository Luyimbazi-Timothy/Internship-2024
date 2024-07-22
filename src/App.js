import React from 'react';
import './App.css';
import Layout from './layout/fullPage/Layout';
import { DisplaySidebarProvider } from './Components/ContextHook/useDisplayContext';


function App() {

  return (
    <DisplaySidebarProvider>
      <Layout />
    </DisplaySidebarProvider>
  );
}

export default App;