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
  const { currentUser, setCurrentUser } = useGlobalContext();
  //
  const handleSignIn = async () => {
    const res = await signInWithGooglePopup();

    navigate("/home");
  };
  //
  const handleSignOut = async () => {
    // Sign out the user from firestore
    await signOutUser().then(console.log("User logged out"));
    navigate("/login");
  };
  //
  return (
    <div className="w-full h-2/5 bg-green-200 flex flex-col justify-center items-center">
      <div>
        Testing.. has user has signed in....{currentUser ? "Yes" : "No"}
      </div>
      <button
        type="button"
        onClick={handleSignIn}
        className="bg-slate-600 text-white font-semibold text-lg p-2 rounded-xl mt-2"
      >
        Sign-In with Google
      </button>
      <button
        type="button"
        onClick={handleSignOut}
        className="bg-slate-600 text-white font-semibold text-lg p-2 rounded-xl mt-2"
      >
        Sign Out!
      </button>
    </div>
  );
}

export default SignIn;
