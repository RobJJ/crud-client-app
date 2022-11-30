import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useReducer,
} from "react";
//
import UserDatabaseServices from "../Firebase/firebase-services";
import reducer from "./Reducer";
import { v4 as uuidv4 } from "uuid";
import { onAuthStateChangedListener } from "../Firebase/firebase-auth";
import { useNavigate } from "react-router-dom";
//
// Initial State for the reducer state
// Lets try make this an empty object and then spread everything into it from user log
const initialState = {
  // client array: Array of objects. Obj has basicInfo for now
  // clients: [],'
  // basicInfo of current user
  // basicInfo: {}
  // could add - finances here for later
};
//
const AppContext = React.createContext();
//
//
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //
  const [currentUser, setCurrentUser] = useState(null);
  //
  //
  const hydrateUser = async (userObj) => {
    // client array: Array of objects. Obj has basicInfo for now
    // clients: [],'
    // basicInfo of current user
    // basicInfo: {}
    // could add - finances here for later
    //
    // Get basic Info in state

    // res: contains the user clients collection
    // const res = await UserDatabaseServices.getAllUsersClients(userObj.uid);
    // res.docs returns the array of clients
    // console.log(res.docs);
    //
    // const userBasicInfo = {};
    console.log("In Hydrate.. userOjb is :", Boolean(userObj));
    const userBasicInfoObj = await UserDatabaseServices.getUser(
      userObj.uid
    ).then((res) => {
      console.log(res.data().userInfo);
      // return { ...res.data().userInfo };
    });
    // userBasicInfo is an obj containing the user's basicInfo
    // const userBasicInfo = { ...userDoc.data().userInfo };
    // console.log(userBasicInfoObj);
  };
  //
  useEffect(() => {
    // Passing the callback to the listener - calls unsub on unmount - cleans up the function on the listener
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        // I made the callback async to allow the user to be populated fully.
        // It has made it slow though... the initial load of the page...
        // The trade off though, is that we can get all the info available
        const res = await UserDatabaseServices.createUserDocFromAuth(user);
        console.log("RESPONSE: ", res);
        // hydrate the user when signing in
        hydrateUser(user);
        console.log("user is true ????");
        // getAllUsersClients(user.uid);
      } else {
        console.log(
          "User on login not true?? dafuk... i will wipe out state here??"
        );
      }
      // this shit runs when user logs in and logs out
      console.log("Coming from Context", user);
      // dispatch({ type: "HYDRATE_USER_STATE", payload: user });
      // setting currentUser.. This is not helpful
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  //
  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
//
//
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
