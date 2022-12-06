import React from "react";
import { Outlet } from "react-router-dom";
import ClientNav from "../Components/Client/Client-Navbar-component";
import { useGlobalContext } from "../Context-Reducer/Context";

//

function HomeClient() {
  //
  const { focusedClient } = useGlobalContext();

  // Send user back to homePage if focusedClient is not set (refresh occured)
  if (!focusedClient) {
    window.location.href = "/home";
  }
  //
  return (
    <div className="w-full h-full bg-pink-300 p-5 pt-10 flex flex-col overflow-auto">
      <div className="bg-blue-800 border-4 border-white h-full w-full rounded-xl flex flex-col ">
        {/* header - client name offset */}
        <div className="flex w-full justify-center ">
          <h2 className="bg-blue-800 border-4 border-white text-white text-center underline w-1/2 rounded-2xl font-bold text-xl tracking-wider p-2 relative bottom-6">
            {focusedClient.name}
          </h2>
        </div>
        {/* client navbar - info,receipts,transaction */}
        <ClientNav />
        {/* rendered page for each nav header */}
        <div className="flex w-full h-full p-2 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeClient;
// If you want to add routing to this HomeClient page...
// You would need to make the clientName and navbar section persist and then render the outlet based on what route is clicked....
//
// <ClientName/>
// <ClientNavbar/>
// <Outlet/>

// Feels dumb making a client name section... I think this should be put into a new component and then the display section will be rendered dynamically...

// url would look something like this
// #/home/client/:uid/info
// #/home/client/:uid/receipts
// #/home/client/:uid/add
