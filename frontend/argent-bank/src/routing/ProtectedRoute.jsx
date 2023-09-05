import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userLoggedIn } from "../features/users/userSlice";

const ProtectedRoute = () => {
  let user = useSelector(userLoggedIn);

  return !user ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoute;
