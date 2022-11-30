import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
//
function ProtectedRoute() {
  const { currentUser } = useGlobalContext();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  //
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;

// let location = useLocation();
// removed this var from the component as it was attributing to rerenders
// state={{ from: location }} replace
// removed this attribute from <Navigation/>, as it was causing rerenders
