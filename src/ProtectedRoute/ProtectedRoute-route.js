import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
//
function ProtectedRoute() {
  const { userActive } = useGlobalContext();
  console.log("ProtectedRoute being called!");
  // if (!userActive) {
  //   return <Navigate to="/login" />;
  // }
  //
  return userActive ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;

// How I found this component
//   const { currentUser } = useGlobalContext();
// Was using this var to check if condition... dont know where its coming from thgou... going to change to state.userInfo
