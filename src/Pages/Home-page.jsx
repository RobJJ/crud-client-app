import React from "react";
// Components
import AddClient from "../Components/AddClient/AddClient-component";
import ClientList from "../Components/ClientList/ClientList-parent-component";
import Log from "../Components/Log/Log-parent-component";
//

function HomePage(params) {
  return (
    <div className="w-2/3 h-2/3 bg-blue-200 flex flex-col">
      <div className="p-2 bg-blue-300">Sign Out -- Home </div>
      <AddClient />
      <Log />
      <ClientList />
    </div>
  );
}

export default HomePage;
