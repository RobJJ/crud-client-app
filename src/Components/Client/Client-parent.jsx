import React from "react";
import ClientDisplay from "./Client-Display-component";
// Components
import ClientNav from "./Client-Navbar-component";

function ClientPage(params) {
  return (
    <div className="bg-orange-100 w-full h-full p-5 flex flex-col gap-5">
      <h2 className="bg-orange-200 p-2 text-center underline">
        Client name here
      </h2>
      {/* CLIENT NAVBAR HERE */}
      <ClientNav />
      {/* CLIENT DISPLAY HERE */}
      <ClientDisplay />
    </div>
  );
}

export default ClientPage;
