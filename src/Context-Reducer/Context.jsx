import React, { useContext, useState, useRef, useEffect } from "react";
//
import UserDatabaseServices from "../Firebase/firebase-services";
import { v4 as uuidv4 } from "uuid";
import { onAuthStateChangedListener } from "../Firebase/firebase-auth";
import { useNavigate } from "react-router-dom";
//
//
const AppContext = React.createContext();
//
//
const AppProvider = ({ children }) => {
  //
  const [currentUser, setCurrentUser] = useState(null);
  //
  useEffect(() => {
    // Passing the callback to the listener - calls unsub on unmount - cleans up the function on the listener
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        UserDatabaseServices.createUserDocFromAuth(user);
        // getAllUsersClients(user.uid);
      } else {
        // setClients([]);
      }
      console.log("Coming from Context", user);
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
