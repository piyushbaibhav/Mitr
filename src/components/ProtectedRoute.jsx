import React from "react";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
import { useUserAuth } from "./UserAuthContext";
const ProtectedRoute = () => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return <Login/>;
};

export default ProtectedRoute;