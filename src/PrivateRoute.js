import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./context/auth";

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useAuth();
  console.log("isauthed: ", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
