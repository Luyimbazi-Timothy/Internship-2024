import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthService from '../../services/auth/AuthService';
import { DisplaySidebarContext } from '../contextHook/useDisplayContext';

const ProtectedRoute = ({ children }) => {
  const { setDisplaySidebarPanel } = useContext(DisplaySidebarContext);
  const { isLoggedIn } = useAuthService();

  useEffect(() => {
    if (!isLoggedIn()) {
      setDisplaySidebarPanel(false);
    }
  }, [isLoggedIn, setDisplaySidebarPanel]);

  if (!isLoggedIn()) {
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
