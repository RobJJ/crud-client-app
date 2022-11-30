// Import the database that you have created
import { db } from "./firebase-config";
// Import functions from firestore
import {
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
//
//
class UserDatabaseServices {
  // ************************
  // Creating User Based methods here,, should seperate this into its own class ... try here first. Do they share any info? besides the db...
  createUserDocFromAuth = async (userAuth) => {
    // doc() gets the doc back
    const userDocRef = doc(db, "users", userAuth.uid);
    //
    const userSnapShot = await getDoc(userDocRef);
    //
    // Does the user exists? If not lets create one for DB
    if (!userSnapShot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      // Create this object to contain the basic info, which in turn seperates it from the clients object. Singular field vs spread out
      const userInfo = {
        displayName,
        email,
        createdAt,
      };
      try {
        await setDoc(userDocRef, {
          userInfo,
        });
      } catch (error) {
        console.log("Error creating the user! : ", error.message);
      }
    }
    // User does exist? Then just return the userDocRef from DB
    return userDocRef;
  };
  //
  //
}

export default new UserDatabaseServices();
