import React from "react";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
// -- -- Components
import Navbar from "../Components/Navbar/Navbar-component";
//
//
function HomePage(params) {
  return (
    <div className="max-w-[800px] w-screen h-screen m-auto bg-blue-200 flex flex-col">
      <Toaster />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default HomePage;
