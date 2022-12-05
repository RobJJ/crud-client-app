import { ActionCodeOperation } from "firebase/auth";

const reducer = (state, action) => {
  //
  if (action.type === "UPDATE_NOTES_OF_FOCUSED_CLIENT") {
    const updatedClientsArray = state.clients.map((client) => {
      if (client.uid === action.payload.uid) {
        return { ...client, notes: action.payload.notes };
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
    //Making changes to the main state
    const updatedClientsArray = state.clients.map((client) => {
      if (client.uid === action.payload.clientUID) {
        return {
          ...client,
          debits: [...client.debits, { ...action.payload.newDebitData }],
          balance:
            Number(client.balance) +
            Number(action.payload.newDebitData.sessions),
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
    // Making changes to the main state
    const updatedClientsArray = state.clients.map((client) => {
      if (client.uid === action.payload.clientUID) {
        return {
          ...client,
          credits: [...client.credits, { ...action.payload.newCreditData }],
          balance:
            Number(client.balance) -
            Number(action.payload.newCreditData.sessions),
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
  if (action.type === "HYDRATE_FOCUSED_CLIENT") {
    // payload: focusedClient - uid...
    // find this client in the state (this will be the updated one) and just overwrite focusedClient
    // This will updat the focusedClient to haver the new debits,credits,balance
    // solved bitch
    const updatedFocusedClient = state.clients.find(
      (client) => client.uid === action.payload
    );
    console.log(updatedFocusedClient);
    //
    return {
      ...state,
      // focusedClient: updatedFocusedClient,
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
