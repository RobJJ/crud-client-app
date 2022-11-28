import React, { useContext, useState, useRef } from "react";
//
//
//
const AppContext = React.createContext();
//
//
const AppProvider = ({ children }) => {
  //
  const [isClientBeingManaged, setIsClientBeingManaged] = useState(false);
  //
  return (
    <AppContext.Provider
      value={{ isClientBeingManaged, setIsClientBeingManaged }}
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
