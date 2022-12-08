import React from "react";
import { useGlobalContext } from "../../Context-Reducer/Context";
import { useNavigate } from "react-router-dom";
import {
  signInWithGooglePopup,
  signOutUser,
} from "../../Firebase/firebase-auth";
//

function SignIn(params) {
  const navigate = useNavigate();
  //
  // const { currentUser } = useGlobalContext();
  //
  const handleSignIn = async () => {
    const res = await signInWithGooglePopup();

    navigate("/home");
  };
  //
  // const handleSignOut = async () => {
  //   // Sign out the user from firestore
  //   await signOutUser().then(console.log("User logged out"));
  //   navigate("/login");
  // };
  //
  return (
    <div className="w-full p-5 bg-blue-800 border-b-4 border-x-4 border-white rounded-b-xl flex flex-col justify-center items-center">
      <button
        type="button"
        onClick={handleSignIn}
        className="bg-slate-600 border-4 border-xl text-white font-semibold text-lg p-2 rounded-xl"
      >
        Sign-In with Google
      </button>
    </div>
  );
}

export default SignIn;

// Used this as testing login state
// <div>
//  Testing.. has user has signed in....{currentUser ? "Yes" : "No"}
// </div>;
//
// Sign out button not needed as we use redirect into the app
// If something goes wrong, user logged out - sent back to landing
//  <button
//    type="button"
//    onClick={handleSignOut}
//    className="bg-slate-600 text-white font-semibold text-lg p-2 rounded-xl mt-2"
//  >
//    Sign Out!
//  </button>;
