import React from "react";
import { Outlet } from "react-router-dom";
import ClientNav from "../Components/Client/Client-Navbar-component";

//

function HomeClient(params) {
  //
  return (
    <div className="w-full h-full bg-pink-100 flex flex-col gap-2 p-5 pt-10">
      <div className="bg-orange-200 h-full w-full rounded-xl">
        <div className="flex w-full justify-center bg-slate-400">
          <h2 className="bg-orange-300 text-center underline w-1/2 rounded-2xl font-bold text-xl tracking-wider p-2 relative bottom-6">
            Client Name
          </h2>
        </div>
        <ClientNav />
        <div>
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
