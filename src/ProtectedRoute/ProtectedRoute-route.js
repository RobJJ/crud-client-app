import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
//
function ProtectedRoute() {
  let location = useLocation();
  const { currentUser } = useGlobalContext();
  console.log("checking from protectedRoute", currentUser);

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  //
  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

export default ProtectedRoute;
