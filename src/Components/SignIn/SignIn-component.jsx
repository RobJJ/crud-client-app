import React from "react";
import { useGlobalContext } from "../../Context-Reducer/Context";
import { useNavigate } from "react-router-dom";
import {
  signInWithGooglePopup,
  signOutUser,
} from "../../Firebase/firebase-auth";
import toast, { Toaster } from "react-hot-toast";

//

function SignIn(params) {
  const navigate = useNavigate();
  //
  const { setUserActive } = useGlobalContext();
  //
  const handleSignIn = async () => {
    const res = await signInWithGooglePopup();
    //
    console.log("SignIn..Res : ", res.user.emailVerified);
    if (res.user.emailVerified) {
      setUserActive(true);
    }
    navigate("/home");
    //
    setTimeout(() => {
      toast.success("You signed in", { duration: 5000 });
    }, 500);
  };
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
