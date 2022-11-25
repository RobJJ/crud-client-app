import React from "react";
// -- -- Components
// import AddClient from "../Components/QuickBar/AddClient/AddClient-component";
import ClientList from "../Components/ClientList/ClientList-parent-component";
// import Log from "../Components/QuickBar/Log/Log-parent-component";
import Navbar from "../Components/Navbar/Navbar-component";
// import Navigation from "../Components/Navigation/Navigation-parent-component";
import QuickBar from "../Components/QuickBar/QuickBar-component";
//

function HomePage(params) {
  return (
    <div className="w-full h-full bg-blue-200 flex flex-col">
      <Navbar />
      <QuickBar />
      <ClientList />
    </div>
  );
}

export default HomePage;
