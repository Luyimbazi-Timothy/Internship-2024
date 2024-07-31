// src/Components/ContextHook/useDisplayContext.js
import React, { createContext, useState } from 'react';

export const DisplaySidebarContext = createContext();

export const DisplaySidebarProvider = ({ children }) => {
  const [displaySidebarPanel, setDisplaySidebarPanel] = useState(true);

  return (
    <DisplaySidebarContext.Provider value={{ displaySidebarPanel, setDisplaySidebarPanel }}>
      {children}
    </DisplaySidebarContext.Provider>
  );
};
