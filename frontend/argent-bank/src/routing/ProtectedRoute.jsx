import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userLoggedIn } from "../features/users/userSlice";

const ProtectedRoute = () => {
  const isUserLoggedIn = useSelector(userLoggedIn);

  return !isUserLoggedIn ? <Navigate to="/login" /> : <Outlet />;
};

export default ProtectedRoute;
