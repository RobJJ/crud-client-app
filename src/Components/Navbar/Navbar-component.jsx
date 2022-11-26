import React from "react";
import { Link } from "react-router-dom";
//

function Navbar(params) {
  return (
    <div className="bg-blue-300 grid grid-cols-3 gap-5 justify-items-stretch p-5">
      <Link to="/" className="bg-blue-100 underline text-2xl">
        Sign Out
      </Link>
      <div className="bg-blue-100 underline text-2xl ">Home</div>
      <div className="bg-blue-100 underline text-2xl justify-self-end mr-5">
        User name
      </div>
    </div>
  );
}

export default Navbar;
