import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context-Reducer/Context";
import { FaHome } from "react-icons/fa";
//
import { signOutUser } from "../../Firebase/firebase-auth";
//

function Navbar(params) {
  //
  const navigate = useNavigate();
  //
  const { userInfo } = useGlobalContext();
  //
  // This is a duplicated function for ease sake
  const handleSignOut = async () => {
    // Sign out the user from firestore
    await signOutUser().then(console.log("User logged out"));
    // changed to from "/" to "/login" for testing purposes
    navigate("/login");
  };
  //
  return (
    <div className="bg-blue-800 grid grid-cols-3 p-5 text-center font-mainNavBar tracking-widest">
      <Link
        onClick={handleSignOut}
        className="bg-blue-800 underline text-2xl text-white"
      >
        SIGN OUT
      </Link>

      <Link
        to="/home"
        // onClick={() => setIsClientBeingManaged(false)}
        className="bg-blue-800 underline text-2xl flex items-center justify-center gap-2 text-white"
      >
        <FaHome />
        <div>HOME</div>
      </Link>

      <div className="bg-blue-800 text-white underline text-2xl">
        {userInfo.displayName
          ? `${userInfo.displayName.toUpperCase()}`
          : "Loading spinner"}
      </div>
    </div>
  );
}

export default Navbar;
