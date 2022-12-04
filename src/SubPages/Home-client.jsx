import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import ClientNav from "../Components/Client/Client-Navbar-component";
import { useGlobalContext } from "../Context-Reducer/Context";

//

function HomeClient() {
  // If there is a focusedClient set in state.. then render the client from the reducer state. This will be faster. If however there is no focusedClient set but we are on this page - (means that the user fkn refreshed while on this page) - then take the url param and reset the focusedClient state.. and then render the client... I think we can avoid using the DB.. the state will still be correct from DB because the context rerenders and thus calls the useEffect which sets the state to what the db has.
  // Get the clientUID from url -
  let { clientUID } = useParams();
  // console.log("clientUID is : ", clientUID);
  //
  const { clients, focusedClient, setFocusedClient } = useGlobalContext();

  // If the user refreshes the page.. it will set the focusedClient to empty.. and it will trigger this.. returning them back to home...
  // It forces them to client the client they want to manage again, thus rebuilding the focusedClient object
  if (!focusedClient) {
    window.location.href = "/home";
  }
  //
  return (
    <div className="w-full h-full bg-pink-100 p-5 pt-10 flex flex-col overflow-auto">
      <div className="bg-orange-200 h-full w-full rounded-xl flex flex-col ">
        {/* header - client name offset */}
        <div className="flex w-full justify-center ">
          <h2 className="bg-orange-300 text-center underline w-1/2 rounded-2xl font-bold text-xl tracking-wider p-2 relative bottom-6">
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
