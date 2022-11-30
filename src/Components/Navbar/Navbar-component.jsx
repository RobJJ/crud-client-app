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
  const { isClientBeingManaged, setIsClientBeingManaged, currentUser } =
    useGlobalContext();
  //
  // This is a duplicated function for ease sake
  const handleSignOut = async () => {
    // Sign out the user from firestore
    await signOutUser().then(console.log("User logged out"));
    navigate("/");
  };
  //
  return (
    <div className="bg-blue-300 grid grid-cols-3 gap-5 justify-items-stretch p-5">
      <Link onClick={handleSignOut} className="bg-blue-100 underline text-2xl ">
        Sign Out
      </Link>
      {isClientBeingManaged && (
        <button
          to="/home"
          onClick={() => setIsClientBeingManaged(false)}
          className="bg-blue-100 underline text-2xl flex items-center gap-2"
        >
          <FaHome />
          <div>Home</div>
        </button>
      )}
      <div className="bg-blue-100 underline text-2xl mr-5 col-start-3 col-end-4">
        {currentUser ? `${currentUser.displayName}` : "Error"}
      </div>
    </div>
  );
}

export default Navbar;
