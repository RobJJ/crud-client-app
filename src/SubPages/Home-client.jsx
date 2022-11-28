import React from "react";
import { Outlet } from "react-router-dom";
import ClientNav from "../Components/Client/Client-Navbar-component";

//

function HomeClient(params) {
  //
  return (
    <div className="w-full h-full bg-pink-100 flex flex-col gap-2 p-2">
      <h2 className="bg-orange-200 p-2 text-center underline">Client Name</h2>
      <ClientNav />
      <Outlet />
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
