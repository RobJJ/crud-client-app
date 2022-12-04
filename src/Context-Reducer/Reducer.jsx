const reducer = (state, action) => {
  //
  // if (action.type === "SET_FOCUSED_CLIENT_OF_USER") {
  //   return {
  //     ...state,
  //     focusedClientUID: action.payload.uid,
  //     focusedClient: action.payload.itemObj,
  //   };
  // }
  //
  //
  if (action.type === "SUBMIT_NEW_CLIENT_TO_USER") {
    return {
      ...state,
      clients: [...state.clients, { ...action.payload }],
    };
  }
  //
  //
  if (action.type === "DELETE_CLIENT_FROM_USER") {
    // Create new array of client, excluding unwanted client
    console.log();
    const updatedClients = state.clients.filter((client) => {
      return client.uid !== action.payload;
    });
    return {
      ...state,
      clients: updatedClients,
    };
  }
  //
  if (action.type === "DEBIT_CLIENT_OF_USER") {
    const updatedClientsArray = state.clients.map((client) => {
      if (client.uid === action.payload.clientUID) {
        return {
          ...client,
          debits: [...client.debits, { ...action.payload.newDebitData }],
        };
      } else {
        return client;
      }
    });
    return {
      ...state,
      clients: updatedClientsArray,
    };
  }
  //
  //
  if (action.type === "CREDIT_CLIENT_OF_USER") {
    //
    const updatedClientsArray = state.clients.map((client) => {
      if (client.uid === action.payload.clientUID) {
        return {
          ...client,
          credits: [...client.credits, { ...action.payload.newCreditData }],
        };
      } else {
        return client;
      }
    });
    //
    return {
      ...state,
      clients: updatedClientsArray,
    };
  }
  //
  //
  if (action.type === "HYDRATE_USER_CLIENTS") {
    return {
      ...state,
      clients: [...action.payload],
    };
  }
  //
  if (action.type === "HYDATE_USER_BASIC_INFO") {
    return {
      ...state,
      userInfo: { ...action.payload },
    };
  }
  //
  return state;
};
//
export default reducer;
