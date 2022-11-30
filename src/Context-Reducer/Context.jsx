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
      // console.log(res.data().userInfo);
      return { ...res.data().userInfo };
    });
    dispatch({ type: "HYDATE_USER_BASIC_INFO", payload: userBasicInfoObj });
  };
  //
  useEffect(() => {
    // Passing the callback to the listener - calls unsub on unmount - cleans up the function on the listener
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        // I made the callback async to allow the user to be populated fully.
        // It has made it slow though... the initial load of the page...
        // The trade off though, is that we can get all the info available
        await UserDatabaseServices.createUserDocFromAuth(user);
        // hydrate the user when signing in
        console.log("user is true ????");
        hydrateUser(user);
        // getAllUsersClients(user.uid);
      } else {
        console.log(
          "User on login not true?? dafuk... i will wipe out state here??"
        );
      }
      // this shit runs when user logs in and logs out
      // console.log("Coming from Context", user);
      // dispatch({ type: "HYDRATE_USER_STATE", payload: user });
      // setting currentUser.. This is not helpful
    });
    return unsubscribe;
  }, []);
  //
  return (
    <AppContext.Provider
      value={{
        ...state,
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

//
// Not really sure why the "user is true?? console log gets logged again".
// But going to move on
