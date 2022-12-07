import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context-Reducer/Context";
import { FaHome } from "react-icons/fa";
import { ReactComponent as Spinner } from "../LoadingIcon/Bars-0.8s-234px.svg";

//
import { signOutUser } from "../../Firebase/firebase-auth";
//

function Navbar(params) {
  //
  const navigate = useNavigate();
  //
  const { userInfo, handleHomeNavigation } = useGlobalContext();
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
    <div className="bg-blue-800 flex px-5 py-2 text-center font-mainNavBar tracking-widest">
      <Link
        onClick={handleSignOut}
        className="bg-blue-800 w-1/3 p-2 underline text-2xl text-white"
      >
        SIGN OUT
      </Link>

      <Link
        to="/home"
        onClick={handleHomeNavigation}
        className="bg-blue-800 w-1/3 p-2 underline text-2xl flex items-center justify-center gap-2 text-white"
      >
        <FaHome />
        <div>HOME</div>
      </Link>

      <div className="bg-blue-800 w-1/3 p-2 text-white underline text-2xl flex justify-center items-center">
        {userInfo.displayName ? (
          `${userInfo.displayName.toUpperCase()}`
        ) : (
          <Spinner className="w-20 p-0 m-0 text-2xl" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
