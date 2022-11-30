// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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
//
//
//
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHGDy_2F2tDoFz6qWsinV7ADJYYtskgR4",
  authDomain: "crud-client-tracker.firebaseapp.com",
  projectId: "crud-client-tracker",
  storageBucket: "crud-client-tracker.appspot.com",
  messagingSenderId: "889930696923",
  appId: "1:889930696923:web:22e400951d60db7f7364fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Database
export const db = getFirestore(app);
//
