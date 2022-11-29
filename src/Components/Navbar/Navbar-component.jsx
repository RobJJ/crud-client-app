import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context-Reducer/Context";
import { FaHome } from "react-icons/fa";
//

function Navbar(params) {
  //
  const { isClientBeingManaged, setIsClientBeingManaged } = useGlobalContext();
  //
  return (
    <div className="bg-blue-300 grid grid-cols-3 gap-5 justify-items-stretch p-5">
      <Link
        to="/"
        onClick={() => setIsClientBeingManaged(false)}
        className="bg-blue-100 underline text-2xl "
      >
        Sign Out
      </Link>
      {isClientBeingManaged && (
        <Link
          to="/home"
          onClick={() => setIsClientBeingManaged(false)}
          className="bg-blue-100 underline text-2xl flex items-center gap-2"
        >
          <FaHome />
          <div>Home</div>
        </Link>
      )}
      <div className="bg-blue-100 underline text-2xl mr-5 col-start-3 col-end-4">
        User name
      </div>
    </div>
  );
}

export default Navbar;
