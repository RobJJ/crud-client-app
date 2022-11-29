import React from "react";
import { Outlet } from "react-router-dom";

// -- -- Components
import Navbar from "../Components/Navbar/Navbar-component";

//

function HomePage(params) {
  return (
    <div className="w-screen h-screen bg-blue-200 flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default HomePage;
