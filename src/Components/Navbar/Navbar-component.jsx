import React from "react";
//

function Navbar(params) {
  return (
    <div className="bg-blue-300 grid grid-cols-3 gap-5 justify-items-stretch p-5">
      <div className="bg-blue-100 underline text-2xl">Sign Out</div>
      <div className="bg-blue-100 underline text-2xl ">Home</div>
      <div className="bg-blue-100 underline text-2xl justify-self-end mr-5">
        User name
      </div>
    </div>
  );
}

export default Navbar;
