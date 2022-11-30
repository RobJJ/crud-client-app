import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";
//

// Setting up Auth
const provider = new GoogleAuthProvider();
//
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
// Setting the persistence nature of user sessions...
setPersistence(auth, browserSessionPersistence);
// .then(() => {
//   // Existing and future Auth states are now persisted in the current
//   // session only. Closing the window would clear any existing state even
//   // if a user forgets to sign out.
//   // ...
//   // New sign-in will be persisted with session persistence.
//   // You can add a method here to promot a user
//   // info found at https://firebase.google.com/docs/auth/web/auth-state-persistence
// });
//
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//
export const signOutUser = async () => {
  await signOut(auth);
};
//
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
