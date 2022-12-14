import React, {
  useContext,
  useState,
  useEffect,
  useReducer,
  useRef,
} from "react";
//
import UserDatabaseServices from "../Firebase/firebase-services";
import reducer from "./Reducer";
import { v4 as uuidv4 } from "uuid";
import { onAuthStateChangedListener } from "../Firebase/firebase-auth";
import toast, { Toaster } from "react-hot-toast";
//

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
  focusedClient: null,
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
const debitClientTemplate = {
  name: "",
  date: "",
  amount: "",
  sessions: "",
  note: "",
  uid: "",
};
const creditClientTemplate = {
  name: "",
  date: "",
  sessions: 1,
  note: "",
  uid: "",
};
//
const AppContext = React.createContext();
//
//
const AppProvider = ({ children }) => {
  //
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newClient, setNewClient] = useState(newClientTemplate);
  const [debitClient, setDebitClient] = useState(debitClientTemplate);
  const [creditClient, setCreditClient] = useState(creditClientTemplate);
  // Refs
  const clientAddedRef = useRef();
  const clientTransactionDebit = useRef();
  const clientTransactionCredit = useRef();
  const clientPageRef = useRef();
  // const clientTransaction = useRef();
  //
  //
  const submitNewClient = (e) => {
    // This function will be called from a form element
    e.preventDefault();
    //
    console.log("submitNewClient called: ");
    // Run name checker test
    const doesClientAlreadyExist = state.clients.some(
      (client) => client.name.toLowerCase() === newClient.name.toLowerCase()
    );
    //
    if (doesClientAlreadyExist) {
      // Use react-toast to alert user..
      toast.error("Client name already in use");
      return;
    }
    //
    const userID = state.userInfo.userID;
    const clientData = {
      ...newClient,
      uid: uuidv4(),
      joined: new Date().toISOString().slice(0, 10),
    };

    // Update STATE
    dispatch({ type: "SUBMIT_NEW_CLIENT_TO_USER", payload: clientData });
    // Toggle notification
    dispatch({
      type: "CLIENT_ADDED_NOTIFICATION_REF",
      payload: clientAddedRef,
    });
    // Update DB
    UserDatabaseServices.addClientToUser(userID, clientData);
    // reset newClient to template
    setNewClient(newClientTemplate);
  };
  // This gets the clients unique ID from the Database
  const getClientId = async (userId, clientUID) => {
    const arrayOfUsersClients = await UserDatabaseServices.getAllUsersClients(
      state.userInfo.userID
    );
    // This iterates through the arr and returns the data for each doc
    // arrayOfUsers.forEach((doc) => console.log(doc.data()));
    // Find matching doc...then take the ID
    const clientID = arrayOfUsersClients.docs.find(
      (client) => client.data().uid === clientUID
    ).id;
    return clientID;
  };
  //
  const deleteClient = async (clientUID) => {
    dispatch({ type: "DELETE_CLIENT_FROM_USER", payload: clientUID });

    const userID = state.userInfo.userID;

    const clientID = await getClientId(userID, clientUID);
    UserDatabaseServices.deleteClientFromUser(userID, clientID);
  };
  //
  const handleCredit = async (e) => {
    e.preventDefault();
    if (!creditClient.name) return;
    // Update State
    const newCreditData = { ...creditClient, uid: uuidv4() };
    const userID = state.userInfo.userID;
    const clientUID = state.clients.find(
      (client) => client.name === creditClient.name
    ).uid;
    //
    setCreditClient(creditClientTemplate);
    //
    dispatch({
      type: "CREDIT_CLIENT_OF_USER",
      payload: { newCreditData, clientUID },
    });
    //
    // Update the focusedClient with new data too (if client is in focus)
    // The dispatch will fail fast if this is being done from QuickBar
    dispatch({ type: "HYDRATE_FOCUSED_CLIENT", payload: clientUID });
    //
    // Notification alert depending on where user is
    if (!state.focusedClient) {
      dispatch({
        type: "CLIENT_TRANSACTION_NOTIFICATION_REF",
        payload: clientTransactionCredit,
      });
    } else {
      dispatch({
        type: "CLIENT_TRANSACTION_NOTIFICATION_REF",
        payload: clientPageRef,
      });
    }
    //
    // Update DB
    const clientID = await getClientId(userID, clientUID);
    const oldClientData = await UserDatabaseServices.getSpecificClientFromUser(
      userID,
      clientID
    );
    // console.log(oldClientData.data());
    const newClientDataWithCredit = {
      ...oldClientData.data(),
      credits: [...oldClientData.data().credits, { ...newCreditData }],
      balance:
        Number(oldClientData.data().balance) - Number(newCreditData.sessions),
    };
    // Updated the client with this debit note
    await UserDatabaseServices.updateClientOfUser(
      userID,
      clientID,
      newClientDataWithCredit
    );
  };
  //
  const handleDebit = async (e) => {
    e.preventDefault();
    console.log("Handle Debit has been called!!");
    // Gaurd clause to ensure user selects a client
    if (!debitClient.name) return;
    // Updating debit note with uuid. This obj used for db write
    const newDebitData = { ...debitClient, uid: uuidv4() };
    const userID = state.userInfo.userID;
    const clientUID = state.clients.find(
      (client) => client.name === debitClient.name
    ).uid;
    // set debitTemplate back to default
    setDebitClient(debitClientTemplate);
    //

    dispatch({
      type: "DEBIT_CLIENT_OF_USER",
      payload: { newDebitData, clientUID },
    });
    // Notifcation to user - quickBar or clientPage - depends where you are
    if (!state.focusedClient) {
      dispatch({
        type: "CLIENT_TRANSACTION_NOTIFICATION_REF",
        payload: clientTransactionDebit,
      });
    } else {
      dispatch({
        type: "CLIENT_TRANSACTION_NOTIFICATION_REF",
        payload: clientPageRef,
      });
    }
    //
    // Update the focusedClient with new data too (if client is in focus)
    // The dispatch will fail fast if this is being done from QuickBar
    dispatch({ type: "HYDRATE_FOCUSED_CLIENT", payload: clientUID });
    // //
    const clientID = await getClientId(userID, clientUID);
    const oldClientData = await UserDatabaseServices.getSpecificClientFromUser(
      userID,
      clientID
    );
    // console.log(oldClientData.data());
    const newClientDataWithDebit = {
      ...oldClientData.data(),
      debits: [...oldClientData.data().debits, { ...newDebitData }],
      balance:
        Number(oldClientData.data().balance) + Number(newDebitData.sessions),
    };
    // Updated the client with this debit note
    await UserDatabaseServices.updateClientOfUser(
      userID,
      clientID,
      newClientDataWithDebit
    );
  };
  //
  const handleFocusedClientSetter = (uid) => {
    // e.preventDefault();
    console.log("focusedClient has been set");
    dispatch({ type: "SET_FOCUSED_CLIENT", payload: uid });
  };
  //
  const handleHomeNavigation = () => {
    dispatch({ type: "NAVIGATE_HOME" });
  };
  //
  const handleNoteUpdate = async (e, uid, tempNoteState) => {
    e.preventDefault();
    // Update state client with new notes...
    dispatch({
      type: "UPDATE_NOTES_OF_FOCUSED_CLIENT",
      payload: { uid, tempNoteState },
    });
    //
    dispatch({
      type: "CLIENT_TRANSACTION_NOTIFICATION_REF",
      payload: clientPageRef,
    });
    // Update DB with new notes
    const clientId = await getClientId(state.userInfo.userID, uid);
    const oldClientData = await UserDatabaseServices.getSpecificClientFromUser(
      state.userInfo.userID,
      clientId
    );
    const updatedNotes = tempNoteState;
    const newClientData = { ...oldClientData.data(), notes: updatedNotes };
    await UserDatabaseServices.updateClientOfUser(
      state.userInfo.userID,
      clientId,
      newClientData
    );
  };
  // This should be hydrateState... this function runs everytime the user has refreshed the page or navigated... so why not use it to hydrate the local state
  const hydrateState = async (userObj) => {
    console.log("Hydrated State called. ");
    // Populate an object with users basic Info -> put in state
    const userBasicInfoObj = await UserDatabaseServices.getUser(
      userObj.uid
    ).then((res) => {
      // console.log(res.data().userInfo);
      return { ...res.data().userInfo, userID: userObj.uid };
    });
    // Get the collection of userClients
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
        console.log("Context called: User is True! User Auth'd");
        hydrateState(user);
      } else {
        console.log("Context called. User is no longer true.");
      }
    });
    return unsubscribe;
  }, []);
  //
  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        newClient,
        setNewClient,
        submitNewClient,
        deleteClient,
        debitClient,
        setDebitClient,
        handleDebit,
        creditClient,
        setCreditClient,
        handleCredit,
        handleNoteUpdate,
        handleFocusedClientSetter,
        clientAddedRef,
        clientTransactionDebit,
        clientTransactionCredit,
        clientPageRef,
        handleHomeNavigation,
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
