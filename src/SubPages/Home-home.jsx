import React from "react";
//
import ClientList from "../Components/ClientList/ClientList-parent-component";
import QuickBar from "../Components/QuickBar/QuickBar-component";
//
function HomeHome(params) {
  //
  return (
    <div className="w-full h-full flex flex-col overflow-auto">
      <QuickBar />
      <ClientList />
    </div>
  );
}

export default HomeHome;
