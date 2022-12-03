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
  clients: [],
  // basicInfo of current user
  userInfo: {},
  // could add - finances here for later
  // add uniqueClients count?
};
const newClientTemplate = {
  name: "",
  email: "",
  contact: "",
  balance: 0,
  debits: [],
  credits: [],
  notes: "",
  joined: "",
  uid: "",
};
//
const AppContext = React.createContext();
//
//
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newClient, setNewClient] = useState(newClientTemplate);
  //
  //
  const submitNewClient = (e) => {
    // This function will be called from a form element
    e.preventDefault();
    //
    console.log("submitNewClient called: ");
    const userID = state.userInfo.userID;
    const clientData = {
      ...newClient,
      uid: uuidv4(),
      joined: new Date().toISOString().slice(0, 10),
    };
    // Update DB
    UserDatabaseServices.addClientToUser(userID, clientData);
    // Update STATE
    dispatch({ type: "SUBMIT_NEW_CLIENT_TO_USER", payload: clientData });
    // reset newClient to template
    setNewClient(newClientTemplate);
  };
  //
  const deleteClient = async (clientUID) => {
    // NOTE: UID is our created ID. ID is firebase autoID
    // gets all the docs of this collection
    const arrayOfUsers = await UserDatabaseServices.getAllUsersClients(
      state.userInfo.userID
    );
    // This iterates through the arr and returns the data for each doc
    // arrayOfUsers.forEach((doc) => console.log(doc.data()));
    const userID = state.userInfo.userID;
    // Find matching doc...then take the ID
    const clientID = arrayOfUsers.docs.find(
      (client) => client.data().uid === clientUID
    ).id;
    UserDatabaseServices.deleteClientFromUser(userID, clientID);
    dispatch({ type: "DELETE_CLIENT_FROM_USER", payload: clientUID });
  };
  //
  // This should be hydrateState... this function runs everytime the user has refreshed the page or navigated... so why not use it to hydrate the local state
  const hydrateState = async (userObj) => {
    // console.log("In Hydrate.. userOjb is :", Boolean(userObj));
    // Populate an object with users basic Info -> put in state
    const userBasicInfoObj = await UserDatabaseServices.getUser(
      userObj.uid
    ).then((res) => {
      // console.log(res.data().userInfo);
      return { ...res.data().userInfo, userID: userObj.uid };
    });
    // Get the collection of userClients
    // If empty, set userClients arr to empty... else
    // Map over the collection and spread docs into an array
    //
    const userClientsDocs = await UserDatabaseServices.getAllUsersClients(
      userObj.uid
    );
    // Created array of objects

    const userClients = userClientsDocs.docs.map((doc) => ({
      ...doc.data(),
    }));

    dispatch({ type: "HYDATE_USER_BASIC_INFO", payload: userBasicInfoObj });
    dispatch({ type: "HYDRATE_USER_CLIENTS", payload: userClients });
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
        console.log("user is true ???? UseEffect has run");
        hydrateState(user);
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
        newClient,
        setNewClient,
        submitNewClient,
        deleteClient,
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
