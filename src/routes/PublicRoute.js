import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, path, ...props }) => {
  const user = useSelector((state) => state.auth.user);
  const userLocal = localStorage.getItem('user');
  const isAuthenticated = user !== null || userLocal !== null ? true : false;
  if (isAuthenticated) {
    return <Navigate to='/app' />;
  }
  return <Route {...props} path={path} element={<Component />} />;
};

export default PublicRoute;
