// import { ActionCodeOperation } from "firebase/auth";

const reducer = (state, action) => {
  //
  if (action.type === "UPDATE_NOTES_OF_FOCUSED_CLIENT") {
    const updatedClientsArray = state.clients.map((client) => {
      if (client.uid === action.payload.uid) {
        return { ...client, notes: action.payload.tempNoteState };
      } else {
        return client;
      }
    });
    //
    return {
      ...state,
      clients: updatedClientsArray,
      focusedClient: {
        ...state.focusedClient,
        notes: action.payload.tempNoteState,
      },
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
    console.log("Dispatched debit clients of user");
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
  if (action.type === "SET_FOCUSED_CLIENT") {
    const chosenClient = state.clients.find(
      (client) => client.uid === action.payload
    );
    //
    return {
      ...state,
      focusedClient: chosenClient,
    };
  }
  //
  //
  if (action.type === "HYDRATE_FOCUSED_CLIENT") {
    // Gaurd clause to fail fast if user is adding debit from QuickBar
    // In this case there will be no focusedClient
    if (!state.focusedClient) {
      return {
        ...state,
      };
    }
    console.log("hydrate the focused client has been called");
    //
    // payload: focusedClient - uid...
    // find this client in the state (this will be the updated one) and just overwrite focusedClient
    // This will updat the focusedClient to haver the new debits,credits,balance
    // solved bitch
    const updatedFocusedClient = state.clients.find(
      (client) => client.uid === action.payload
    );
    //
    return {
      ...state,
      focusedClient: updatedFocusedClient,
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
  if (action.type === "NAVIGATE_HOME") {
    //
    return {
      ...state,
      focusedClient: null,
    };
  }
  //
  if (action.type === "CLIENT_ADDED_NOTIFICATION_REF") {
    //
    action.payload.current.classList.remove("hidden");
    setTimeout(() => {
      action.payload.current.classList.add("hidden");
    }, 2500);
    //
    return { ...state };
  }
  //
  if (action.type === "CLIENT_TRANSACTION_NOTIFICATION_REF") {
    action.payload.current.classList.remove("hidden");
    setTimeout(() => {
      action.payload.current.classList.add("hidden");
    }, 2500);
    //
    return { ...state };
  }
  //
  return state;
};
//
export default reducer;
